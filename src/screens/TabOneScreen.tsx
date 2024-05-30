import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { MainScreen } from "../modules/mainScreen";
import LinearGradient from "react-native-linear-gradient";

export default function TabOneScreen() {
  return (
    <LinearGradient
      useAngle
      // angle={}
      // start={{ x: 0, y: 1 }}
      // end={{ x: 1, y: 0 }}
      colors={["#c9c9c6", "#cbcada", "#c2c7a9"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <MainScreen />
        <View
          style={styles.separator}
          // lightColor="#fff"
          // darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    margin: 25,
    height: 8,
    // backgroundColor: "black",
  },
  gradient: {
    flexDirection: "row",
    height: '100%',
  },
  container: {
    marginTop: 100,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
