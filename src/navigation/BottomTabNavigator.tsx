import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../../types'
import { StyleSheet } from 'react-native'
import DebugScreen from '../screens/Debug'
import ChartScreen from '../screens/Chart'
import AllMeasurementsScreen from '../screens/AllMeasurements'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Glucose"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-water" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Chart"
        component={ChartTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-stats" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="All"
        component={AllMeasurementsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-create" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Debug"
        component={DebugTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-build" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
         options={{ headerTitle: 'Viridis', 
         headerStyle: {
          backgroundColor: '#38C0F3'
         },
         headerTitleStyle: {
           color: 'white'
         }}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title'}}
      />
    </TabTwoStack.Navigator>
  );
}

const ChartTabStack = createStackNavigator<TabTwoParamList>()

export function ChartTabNavigator() {
  return (
    <ChartTabStack.Navigator>
      <ChartTabStack.Screen
        name="Chart"
        component={ChartScreen}
        options={{ headerTitle: 'Chart',
        headerStyle: {
          backgroundColor: '#38C0F3'
         },
         headerTitleStyle: {
           color: 'white'
         } }}
      />
    </ChartTabStack.Navigator>
  )
}

const DebugTabStack = createStackNavigator<TabTwoParamList>()

function DebugTabNavigator() {
  return (
    <DebugTabStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={DebugScreen}
        options={{ headerTitle: 'Debug',
        headerStyle: {
          backgroundColor: '#38C0F3'
         },
         headerTitleStyle: {
           color: 'white'
         } }}
      />
    </DebugTabStack.Navigator>
  );
}

const AllMeasurementsTabStack = createStackNavigator<TabTwoParamList>()

function AllMeasurementsTabNavigator() {
  return (
    <AllMeasurementsTabStack.Navigator>
      <AllMeasurementsTabStack.Screen
        name="TabTwoScreen"
        component={AllMeasurementsScreen}
        options={{ headerTitle: 'All measurements',
        headerStyle: {
          backgroundColor: '#38C0F3'
         },
         headerTitleStyle: {
           color: 'white'
         } }}
      />
    </AllMeasurementsTabStack.Navigator>
  );
}

let styles= StyleSheet.create({
  headerStyle: {
    height: 80, 
    color: '#38C0F3' // Specify the height of your custom header
  }
})


