import { StyleSheet } from 'react-native'

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
    chartWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 500,
      maxWidth: 4000,
      height: '100%',
      paddingHorizontal: 40,
      backgroundColor: 'white'
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

    export default styles