import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, TouchableOpacity } from "react-native";
import { BottomTabParamList, RootStackParamList } from "../../types";
import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator, { TabBarIcon } from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

import { Text, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOneScreen from "../screens/TabOneScreen";
import ChartScreen from "../screens/Chart";
import AllMeasurementsScreen from "../screens/AllMeasurements";

const Tab = createBottomTabNavigator();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);
const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>Settings</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer documentTitle={{enabled: true}}>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Glucose" component={TabOneScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="All" component={AllMeasurementsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIcon = (iconName: string, isFocused: boolean) => {
  switch (iconName) {
    case "Glucose":
      return (
        <TabBarIcon name="ios-water" color={isFocused ? "white" : "#ededed"} />
      );
    case "Chart":
      return (
        <TabBarIcon name="ios-stats" color={isFocused ? "white" : "#ededed"} />
      );
    case "All":
      return (
        <TabBarIcon name="ios-create" color={isFocused ? "white" : "#ededed"} />
      );
    default:
      return
  }
};

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      // useAngle
      // angle={30}
      // start={{ x: 0, y: 1 }}
      // end={{ x: 1, y: 0 }}
      // colors={["#020024", "#09795e", "#00d4ff"]}
      style={styles.gradient}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const icon = getIcon(route.name, isFocused)
        const onPress = () => {
          if (!isFocused) {
            if (route.name === "Glucose") {
              navigation.navigate("Glucose");
            } else if (route.name === "Chart") {
              navigation.navigate("Chart");
            } else if (route.name === "All") {
              navigation.navigate("All");
            }
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.button}>
            <View style={styles.container}>
              <Text style={styles.text}>{icon}</Text>
              <Text style={isFocused ? styles.textActive : styles.textInactive}>
                {route.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: 'white',
    shadowRadius: 10,
    shadowColor: 'red',
    shadowOpacity: 100,
  },
  gradient: {
    flexDirection: "row",
    backgroundColor: "#c9c9c6", //"#cbcada", "#c2c7a9"
    height: 56,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  textActive: {
    color: "white",
    fontSize: 14,
  },
  textInactive: {
    color: "#ededed",
    fontSize: 12,
  },
});
