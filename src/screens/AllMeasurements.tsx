import React, {Component, useState, useEffect} from 'react';
import { BleManager } from 'react-native-ble-plx';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { AllMeasurements } from '../modules/allMeasurements';



export default function AllMeasurementsScreen() {
  return (
    <View style={styles.container}>
      <AllMeasurements/>
    </View>
  );
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
});
