import React from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import { Text } from '../../../../components/Themed'
import { Cart, BluetoothDisabledModal, LocationDisabledModal } from '../../../components'
import { MainScreenComponentPropsType } from '../../../core/types'
import styles from './mainScreenStyle'
import { statusList } from '../../../core/enums'
import { Ionicons } from '@expo/vector-icons'

let MainScreenComponent: React.FC<any> = (
  {
    deviceData, 
    appData,
    scannedDevicesList,
    measurements,
    average,
    currentValue
  }) => {
    switch (appData.appStatus) {
      case statusList.opened: {
        return  <View style={styles.container}><Text>Приложение открыто</Text></View>
      }
      case statusList.bluetoothIsEnabled: {
        return  <View style={styles.container}><Text>Блютуз включен</Text></View>
      }
      case statusList.deviceIsFound: {
        return  <View style={styles.container}><Text>Устройство найдено</Text></View>
      }
      case statusList.deviceIsConnected: {
        return  <View style={styles.container}><Text>Приложение соединено</Text></View>
      }
      case statusList.allMeasurementsWasReceived: {
        return  <View style={styles.container}><Text>Получены предыдущие значения</Text></View>
      } 
      case statusList.connectionError: {
        return  <View style={styles.container}><Text>Ошибка соединения</Text></View>
      }
      case statusList.bluetoothError: {
        return  <View style={styles.container}><Text>bluetooth error</Text></View>
      }
      default: return <View style={styles.container}>
        {
          currentValue.length === 2 && appData.appStatus !== statusList.isOnGetAllMeasurements
          ? <View style={styles.measurementsWrapper}>
             <Cart currentValue={currentValue} average={average}/>          
            </View>
          : <ActivityIndicator size="large" color="#38C0F3" />
        }
        </View> 
  }
    return (
      <View style={styles.container}>
        {/* {
          appData.appStatus === statusList.bluetoothError
          ? <BluetoothDisabledModal/>
          : <></>
        }
        {
          appData.appStatus === statusList.geolocationError
          ? <LocationDisabledModal/>
          : <></>
        }
        {
          <Searching appStatus={appData.appStatus}/>
         // measurements && measurements.length === 0
          //?
           // <Info appData={appData}/>
          // : <View style={styles.measurementsWrapper}>
          //      <Cart currentValue={'hi'} average={average}/>            
          //   </View>
        } */}
      </View>
    )
}
//for debug in real app
// <View style={styles.measurementsWrapper}>
//             <Text> {`${measurements.length}`}</Text>
//             <Text> {`${appData.log[appData.log.length -1]}`}</Text>
//             <Text> {`${appData.connectedToViridis}]}`}</Text>
//           </View>

let Info = ({appData}: any) => {
  return (
    <View style={styles.infoView}>
      
        {
          appData.appStatus === statusList.isScanning
          ? <Searching/>
          : <Text></Text>
        } 
        {
          appData.appStatus === statusList.bluetoothError
          ? <View >
            <Ionicons style={styles.bluetoothLogo} name="ios-bluetooth"></Ionicons>
            <Text>bluetoothError</Text>
          </View>
          : <></>
        }
      
        {
          appData.appStatus === statusList.deviceIsConnected  
          ? <Connected/>
          : <Text></Text>
        } 
        
    </View>
  )
}

let Searching = ({appStatus}) => {
  return (
    <View style={styles.infoView}>
      <Image
        source={require('../../../img/Searching.png')}
      />
      <Text style={styles.text}>{statusList[appStatus]}</Text>
    </View>
  )
}

let Connected = () => {
  return (
    <View style={styles.infoView}>
      <Image
        source={require('../../../img/Success.png')}
      />
     <Text style={styles.text}>{`Connected!)`}</Text>
    </View>
  )
}

export default MainScreenComponent