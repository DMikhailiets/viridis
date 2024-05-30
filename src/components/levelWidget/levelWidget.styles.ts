import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    levelWrap: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0)",
        // backgroundColor: "red",
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
      },
      subCart: {
        margin: 20,
        height: '100%',
        width: '100%',
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: 'white',
        alignItems: 'center',
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        borderRadius: 60,
      },
      text1: {
        color:  '#A6D7D4',
        fontSize: 35
      },
      arrow: {
        fontSize: 50,
        color: '#A6D7D4',
        paddingRight: 20,
        // backgroundColor: 'white',
        borderRadius: 3000,
        
      },
      arrowWrapper: {
        borderRadius: 3000,
        // backgroundColor: 'white',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: 'center'
      },
      title: {
        fontSize: 70,
        //fontWeight: 'regular',
        color: '#A6D7D4',
        fontFamily: 'Roboto-Thin.ttf',
        fontWeight: '100',
      },
})

export const shadowOpt = {
  width: 250,
  height: 250,
  color: "#000",
  border: 10,
  radius: 60,
  opacity: 0.1,
  x: 20,
  y: 20
};