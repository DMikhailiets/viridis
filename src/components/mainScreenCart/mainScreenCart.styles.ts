import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cart: {
      flex: 1,
      // alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
      height: "100%",
      marginTop: 60,
      // borderRadius: 3000,
      backgroundColor: "rgba(0,0,0,0)",
    },
    topContainer: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      backgroundColor: "rgba(0,0,0,0)",
      // backgroundColor: "blue",
      // backgroundColor: "red",
      // alignItems: 'center',
      width: '100%',
      height: 400
    },
    topContainerLeftGroup: {
      flexDirection: 'column',
      width: '65%',
      //  backgroundColor: "red",
      backgroundColor: "rgba(0,0,0,0)",
      // height: '100%',
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0)",
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "rgba(0,0,0,0)",
    },
    critical: {
      backgroundColor: 'rgba(0,0,0,0)'
    },
    logo: {
      height: 110,
      width: '80%',
      // margin: 20,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginLeft: 20,
      marginBottom: 20,
      marginTop: 20,
      backgroundColor: 'rgba(0,0,0,0)',
      // backgroundColor: 'red',
    }
  });
  