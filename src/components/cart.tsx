import React from 'react'
import { StyleSheet } from 'react-native';
import { divide } from 'react-native-reanimated'
import { Text, View } from '../../components/Themed';

let Cart = (props: any) => {
  return(
        <View style={styles.cart}>
            <View style={styles.subCart}>
              
    <Text style={styles.title}>{`${props.currentValue.glucose}`}</Text>
              <Text style={styles.text}>current value</Text>
            </View>
            <View style={styles.subCart1}>
              {/* <Text>{ props.glucose.date }</Text> */}
  {/* <Text style={styles.textIn}>{props.currentValue.date}</Text> */}
  <Text style={styles.textIn}>critical level is 7 mol/l</Text>
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
      marginTop: 60,
      backgroundColor: 'white',
      color: 'white',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#38C0F3",
      //height: 100,
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
      justifyContent: 'center',
      alignItems: 'center'
      
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
    }
  });