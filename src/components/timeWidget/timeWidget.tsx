import moment from "moment";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { shadowOpt, styles } from "./timeWidget.styles";
import { Ionicons } from "@expo/vector-icons";
//@ts-ignore
import { BoxShadow } from "react-native-shadow";

export interface TimeWidgetPropsType {
  date: string;
}

export const TimeWidget: FC<TimeWidgetPropsType> = ({ date }) => {
  const hours = moment(date).format("hh");
  const minutes = moment(date).format("mm");
  return (
    <View style={{ width: "100%", height: 300 }}>
      <BoxShadow setting={shadowOpt}>
        <View style={{ width: '100%', height: 400 }}>
          <View style={styles.wrap}>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{hours}</Text>
              <Text>-------------</Text>
              <Text style={styles.time}>{minutes}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Ionicons style={styles.alarm} name="ios-alarm" />
              <Text style={styles.title}>received at</Text>
            </View>
          </View>
        </View>
      </BoxShadow>
    </View>
  );
};
