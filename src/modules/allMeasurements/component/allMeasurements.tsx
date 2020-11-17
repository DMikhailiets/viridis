import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { DebugComponentPropsType, MainScreenComponentPropsType } from '../../../core/types'
import { generateId } from '../../../utils'
import styles from './allMeasurementsStyles'


let AllMeasurementsComponent: React.FC<any> = (props) => {

let logArray = props.allMeasurements.map((measurement: any) => <Cart key={measurement.id}value={measurement.value} date={measurement.date}>{measurement}</Cart>)
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
        <Text style={styles.title}>{props.value}</Text>
      </View>
      <View style={styles.subCart1}>
        <Text style={styles.textIn}>{props.date}</Text>
      </View>
    </View>
  )
}
