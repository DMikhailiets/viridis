import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrap: {
      borderRadius: 30,
      backgroundColor: 'rgba(255,255,255,1)',
      // backgroundColor: 'red',
      marginLeft: 20,
      marginTop: 20,
      height: 170,
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 100,
      shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10
    },
    level: {
      paddingTop: 20,
      fontSize: 50,
      backgroundColor: 'rgba(0,0,0,0)',
      // backgroundColor: 'red',
    },
    text: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'rgba(0,0,0,0)',
      backgroundColor: 'rgba(0,0,0,0)',
      paddingBottom: 20,
    },
    textItem: {
      fontSize: 14,
      backgroundColor: 'rgba(0,0,0,0)',
    }
})
