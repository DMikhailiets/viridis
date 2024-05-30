import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Text } from '../../../../components/Themed'
import { BluetoothDisabledModal, LocationDisabledModal } from '../../../components'
import styles from './mainScreenStyle'
import { statusList } from '../../../core/enums'
import MainScreenCart from '../../../components/mainScreenCart/mainScreenCart'

let MainScreenComponent: React.FC<any> = (
  {
    appData,
    deviceData,
    isConnected,
    average,
    currentValue,
    lastMeasurements
  }) => {
    switch (appData.appStatus) {
      case statusList.opened: 
      case statusList.bluetoothIsEnabled: 
      case statusList.deviceIsFound: 
      case statusList.deviceIsConnected: 
      case statusList.allMeasurementsWasReceived: {
        <ActivityIndicator size="large" color="#A6D7D4" />
      }
      case statusList.connectionError: {
        return  <View style={styles.container}><Text>Connection error</Text></View>
      }
      case statusList.bluetoothError: {
        return  (
        <View style={styles.container}>
          {
            currentValue.length === 2
            ? <View style={styles.measurementsWrapper}>
                <BluetoothDisabledModal/>
                <MainScreenCart currentValue={currentValue} isConnected={isConnected} lastMeasurements={lastMeasurements}/>          
              </View>
            : <ActivityIndicator size="large" color="#A6D7D4" />
          }
        </View>)
      }
      case statusList.geolocationError: {
        return  (
          <View style={styles.container}>
          { 
            currentValue.length === 2
            ? <View style={styles.measurementsWrapper}>
                <LocationDisabledModal/>
                <MainScreenCart currentValue={currentValue} isConnected={isConnected} lastMeasurements={lastMeasurements}/>        
              </View>
            : <ActivityIndicator size="large" color="#38C0F3" />
          }
          </View>)
      }
      default: return <View style={styles.container}>
        {
          currentValue.length === 2 && appData.appStatus !== statusList.isOnGetAllMeasurements
          ? <View style={styles.measurementsWrapper}>
             <MainScreenCart currentValue={currentValue} isConnected={isConnected} lastMeasurements={lastMeasurements}/>        
            </View>
          : <ActivityIndicator size="large" color="#38C0F3" />
        }
        </View> 
  }
}

export default MainScreenComponent