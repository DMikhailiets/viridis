import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect } from "react";
import { AppState } from "react-native";

import { Text } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./src/navigation";

import store from "./src/redux/store";

import { Notification } from "./src/modules";

import * as Permissions from "expo-permissions";
import { SwitchLocation } from "./src/components";

export default function App() {
  const [permission] = Permissions.usePermissions(Permissions.LOCATION, {
    ask: true,
  });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const _handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App in foreground");
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState: ", appState.current);
  };

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  if (!permission || permission.status !== "granted") {
    return <SwitchLocation />;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Notification />
          <Navigation colorScheme={'light'} />
          <StatusBar style="dark"/>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
