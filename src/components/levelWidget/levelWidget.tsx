import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "../../../components/Themed";
import { shadowOpt, styles } from "./levelWidget.styles";
import { MeasurementValue } from "../../../types";
import { FC } from "react";
import { Text } from "react-native";
//@ts-ignore
import { BoxShadow } from "react-native-shadow";

export interface TimeWidgetPropsType {
  date: string;
}


interface ILevelWidgetPropsType {
  currentValue: MeasurementValue;
  previoustValue: MeasurementValue;
}

export const LevelWidget: FC<ILevelWidgetPropsType> = (props) => {
  const { currentValue, previoustValue } = props;
  return (
    <View style={{ width: "100%", height: 300, backgroundColor: 'rgb(0,0,0,0)' }}>
      <BoxShadow setting={shadowOpt}>
        {/* <View style={{ width: "100%", height: 300 }}> */}
 
    <View style={styles.subCart}>
      <View style={styles.levelWrap}>
        <View style={styles.arrowWrapper}>
          {currentValue.glucose < previoustValue.glucose ? (
            <Ionicons style={styles.arrow} name="ios-arrow-dropup"></Ionicons>
          ) : (
            <Ionicons style={styles.arrow} name="ios-arrow-dropdown"></Ionicons>
          )}
          <Text style={styles.title}>{currentValue.glucose}</Text>
        </View>
        <Text style={styles.text1}>current level</Text>
      </View>
    </View>
        {/* </View> */}
    </BoxShadow>
    </View>
  );
};
