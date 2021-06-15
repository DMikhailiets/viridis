import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../../components/Themed'
import { Debug } from '../modules'

export default function DebugScreen() {
  return (
    <View style={styles.container}>
      <Debug/>
    </View>
  )
}

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: 25,
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
