import React from 'react'
import { View, Image } from 'react-native'
import { Text } from '../../../../components/Themed'
import { Cart } from '../../../components'
import { MainScreenComponentPropsType } from '../../../core/types'
import styles from './mainScreenStyle'
import { statusList } from '../../../core/enums'

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
          props.appData.appStatus === statusList.isScanning
          ? <Searching/>
          : <Text></Text>
        } 

      
        {
          props.appData.appStatus === statusList.deviceIsConnected  
          ? <Connected/>
          : <Text></Text>
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