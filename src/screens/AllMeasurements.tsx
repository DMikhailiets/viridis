import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../../components/Themed'
import { AllMeasurements } from '../modules/allMeasurements'
import LinearGradient from 'react-native-linear-gradient'

export default function AllMeasurementsScreen() {
  return (
    <LinearGradient
    useAngle
    // angle={}
    // start={{ x: 0, y: 1 }}
    // end={{ x: 1, y: 0 }}
    colors={["#c9c9c6", "#cbcada", "#c2c7a9"]}
    style={styles.gradient}
  >
    <View style={styles.container}>
      <AllMeasurements/>
    </View>
  </LinearGradient>

  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  gradient: {
    flexDirection: "row",
    height: '100%',
  },
})