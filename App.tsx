import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
 
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './src/navigation';


import store from './src/redux/store';

import { Notification } from './src/modules';

import * as Permissions from 'expo-permissions';
import { Text, View } from './components/Themed';
import { Button, Image } from 'react-native';
import { SwitchLocation } from './src/components';

export default function App() {
  const [permission, askForPermission] = Permissions.usePermissions(Permissions.LOCATION, { ask: true });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!permission || permission.status !== 'granted') {
    return <SwitchLocation/>
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
            <Notification/>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
