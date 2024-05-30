import React from "react";
import { View } from "../../../components/Themed";
import { FC } from "react";
import { Text } from "react-native";
import { styles } from "./criticalWidget.styles";

export const CriticalWidget: FC = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.level}>7</Text>
      <View style={styles.text}>
        <Text style={styles.textItem}>critical</Text>
        <Text style={styles.textItem}>level</Text>
      </View>
    </View>
  );
};
