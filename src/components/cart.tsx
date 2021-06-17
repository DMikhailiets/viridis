import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed'
import moment from 'moment'
 
let Cart = (props: any) => {
  const data = props.currentValue[1]
  return(
    <View style={styles.cart}>
      <View style={styles.subCart}>
        <View style={styles.arrowWrapper}>
          {
            data.glucose > props.currentValue[0].glucose
            ? <Ionicons style={styles.arrow} name="ios-arrow-dropup"></Ionicons>
            : <Ionicons style={styles.arrow} name="ios-arrow-dropdown"></Ionicons>
          }
          <Text style={styles.title}>{`${props.currentValue[1].glucose}`}</Text>
        </View>
        {
          props.isConnected 
          ? <View style={styles.deviceStatus}>
              <Text style={styles.text}>connected </Text>
              <Ionicons style={styles.success} name="ios-checkmark-circle-outline"></Ionicons>
            </View>
          : <View style={styles.deviceStatus}>
              <Text style={styles.text}>device not found </Text> 
              <Ionicons style={styles.notFound} name="ios-close-circle"></Ionicons>
            </View>
          
        }
      </View>
      <View style={styles.subCart1}>
        {
          props.deviceData 
          ? <Text style={styles.textInBig}>{props.deviceData.name}</Text>
          : <React.Fragment/>
        }
        <Text style={styles.textIn}>critical level is 7 mol/l</Text>
        <Text style={styles.textIn}>sequence number: {data.SequenceNumber}</Text>
        <Text style={styles.textIn}>base time: {data.BaseTime}</Text>
        <Text style={styles.textIn}>time offset: {data.TimeOffset}</Text>
        <Text style={styles.textIn}>recieved at: {moment(data.date).format("hh:mm:ss DD.MM.YY")}</Text>
      </View>
    </View>
  )
}
export default Cart

const styles = StyleSheet.create({
    cart: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      marginTop: 40,
      backgroundColor: 'white',
      color: 'white',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#38C0F3",
    },
    subCart: {
      height: 70,
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    subCart1: {
      height: 30,
      width: '100%',
      backgroundColor: "#38C0F3",
      borderBottomLeftRadius: 15, 
      borderBottomRightRadius: 15,
      flex: 1,
      paddingLeft: 40,
      justifyContent: 'center',
      alignItems: 'flex-start'
      
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 125,
      //fontWeight: 'regular',
      color: '#38C0F3',
      fontFamily: 'Montserrat',
      fontWeight: '100',
    },
    text: {
      color: '#38C0F3',
      fontSize: 25,
      fontWeight: '100',
    },
    textIn: {
      color: '#fff',
      fontSize: 25,
      fontWeight: '100',
    },
    textInBig: {
      color: '#fff',
      fontSize: 35,
      fontWeight: '100',
    },
    arrow: {
      fontSize: 50,
      color: '#38C0F3',
      paddingRight: 20
    },
    success: {
      fontSize: 30,
      color: '#19FF19',
      paddingRight: 20
    },
    notFound: {
      fontSize: 30,
      color: '#FF2020',
      paddingRight: 20
    },
    arrowWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    deviceStatus: {
      flex: 1,
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });