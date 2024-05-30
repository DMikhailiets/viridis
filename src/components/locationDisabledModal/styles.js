import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      width: 350,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 300,
      width: 38,
      height: 38,
      padding: 10,
      elevation: 2
      
    },
    buttonOpen: {
      backgroundColor: "#A6D7D4",
    },
    buttonClose: {
      backgroundColor: "#A6D7D4",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }, 
    errorMessage: {
        flex: 1,
        flexGrow: 1,
        // width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    errorMessageText: {
      width: 250
        // paddingRight: 10
    },
    bluetoothLogo: {
        marginLeft: 10,
        paddingLeft: 30,
        marginRight: 20,
        fontSize: 30
    }
  });

  export default styles