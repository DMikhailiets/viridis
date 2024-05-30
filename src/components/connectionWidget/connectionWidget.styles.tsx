import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      deviceStatus: {
        borderRadius: 3000,
        backgroundColor: 'rgba(255,255,255,0)',
        flex: 1,
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      },
      subCart: {
        height: '20%',
        width: '90%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: 'red',
        alignItems: 'center',
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        borderRadius: 30,
        marginLeft: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10
      },
      success: {
        fontSize: 30,
        color: "#19FF19",
        // paddingRight: 20,
      },
      notFound: {
        fontSize: 30,
        color: "#FF2020",
        // paddingRight: 20,
      },
      text: {
        color: 'grey',
        // color: "#38C0F3",
        fontSize: 25,
        fontWeight: "100",
      },
      icon: {
        fontSize: 35,
        color: '#A6D7D4'
      },
      iconDisabled: {
        fontSize: 35,
        color: 'grey'
      }
})