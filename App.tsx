import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification"

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
 
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { StyleText } from './src/components';
import Navigation from './src/navigation';

import { registerRootComponent } from 'expo';

import store from './src/redux/store';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { Notification } from './src/modules';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

// let testPush = () => {
//   PushNotification.localNotification({
//       title: 'Viridis',
//       message: 'Bla bla'
//   })
//   //debugger
// }


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
