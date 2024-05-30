import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrap: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 360,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 30,
        margin: 20,
    },
    time: {
        fontSize: 65,
    },
    title: {
        // height: 100
    },
    timeContainer: {
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'green',
        height: '70%'
    },
    infoContainer: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        height: '30%',
        // margin: 20
    },
    alarm: {
        fontSize: 50,
    }
})

export const shadowOpt = {
    width: 100,
    height: 360,
    color: "#000",
    border: 10,
    radius: 30,
    opacity: 0.1,
    x: 20,
    y: 20
  };