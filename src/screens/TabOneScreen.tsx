import React, {Component, useState, useEffect} from 'react';
import { BleManager } from 'react-native-ble-plx';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { MainScreen } from '../modules/mainScreen';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* 1<Text style={styles.title}>Viridis</Text> */}
      <MainScreen/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
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
