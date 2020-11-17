import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { BleManager } from 'react-native-ble-plx'
import { Text } from '../../../../components/Themed'
import { Cart } from '../../../components'
import { MainScreenComponentPropsType } from '../../../core/types'
import { setLog } from '../../../redux/reducers/appReducer'
import { base64Decode } from '../../../utils'
import { Notification } from '../../../modules'
import * as firebase from 'firebase'
import styles from './mainScreenStyle'


let MainScreenComponent: React.FC<MainScreenComponentPropsType> = (
  {
    deviceData, 
    appData,
    scannedDevicesList,
    measurements,
    average
  }) => {
    return (
      <View style={styles.container}>
        {
          measurements && measurements.length === 0
          ? <Info appData={appData}/>
          : <View style={styles.measurementsWrapper}>
               <Cart currentValue={measurements.pop()} average={average}/>            
            </View>
        }
      </View>
    )
}
//for debug in real app
// <View style={styles.measurementsWrapper}>
//             <Text> {`${measurements.length}`}</Text>
//             <Text> {`${appData.log[appData.log.length -1]}`}</Text>
//             <Text> {`${appData.connectedToViridis}]}`}</Text>
//           </View>

let Info = (props: any) => {
  return (
    <View style={styles.infoView}>
      
        {
          props.appData.isScanning === true
          ? <Searching/>
          : <Text></Text>
        } 

      
        {
          props.appData.connectedToViridis === false  
          ? <Text></Text>
          : <Connected/>
        } 
        
    </View>
  )
}

let Searching = () => {
  return (
    <View style={styles.infoView}>
      <Image
        source={require('../../../img/Searching.png')}
      />
      <Text style={styles.text}>Searching...</Text>
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