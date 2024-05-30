import React, { FC } from "react"
import { styles } from "./connectionWidget.styles"
import { View } from "../../../components/Themed"
import { Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export interface IConnectionWidgetPropsType {
    isConnected: boolean
}

export const ConnectionWidget: FC<IConnectionWidgetPropsType> = ({isConnected}) => {
    return (<View style={styles.subCart}>
        <Ionicons style={isConnected ? styles.icon : styles.iconDisabled} name="ios-paper-plane" />
        {isConnected ? (
          <View style={styles.deviceStatus}>
            <Text style={styles.text}>connected </Text>
          </View>
        ) : (
          <View style={styles.deviceStatus}>
            <Text style={styles.text}>not found </Text>
          </View>
        )}
      </View>)
}