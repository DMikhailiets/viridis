import moment from 'moment'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { DebugComponentPropsType, MainScreenComponentPropsType } from '../../../core/types'
import { generateId } from '../../../utils'
import styles from './allMeasurementsStyles'

let AllMeasurementsComponent: React.FC<any> = (props) => {

let logArray = props.allMeasurements.map((measurement: any) => <Cart
 key={measurement.id}
 {...measurement} 
 >
  
   {measurement.glucose}</Cart>)
    return (
        <View style={styles.container}>
            <ScrollView>
            {logArray}
            </ScrollView>
        </View>
    )
}

export default AllMeasurementsComponent



let Cart = (props: any) => {
  return(
    <View style={styles.cart}>
      <View style={styles.subCart}>
        {/* <Text style={styles.title}>{`${props.value}`}</Text> */}
        <Text style={styles.title}>{props.glucose}</Text>
      </View>
      <View style={styles.subCart1}>
        <Text style={styles.textIn}>sequence number: </Text>
        <Text style={styles.textIn}>{props.SequenceNumber}</Text>
        <Text style={styles.textIn}>base time: </Text>
        <Text style={styles.textIn}>{props.BaseTime}</Text>
        <Text style={styles.textIn}>time offset: </Text>
        <Text style={styles.textIn}>{props.TimeOffset}</Text>
        <Text style={styles.textIn}>recieved at: </Text>
        <Text style={styles.textIn}>{moment(props.date).format("hh:mm:ss DD.MM.YY")}</Text>
      </View>
    </View>
  )
}
