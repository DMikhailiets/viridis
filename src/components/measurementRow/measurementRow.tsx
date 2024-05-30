import { MeasurementValue } from "../../../types";
import { Text, View } from "react-native";
import { styles } from "./measurementRow.styles";
import React, { FC } from "react";
import moment from "moment";

interface IMeasurementRowPropsType {
  measurement: MeasurementValue;
}
export const getRealTime = (measurement: MeasurementValue) => {
  const isoDate = new Date(measurement.date).getTime();
  let offset = 0
  const arrayBaseTime =  measurement.BaseTime.split(':')
  console.log('BaseTime >', measurement.BaseTime)
  arrayBaseTime.forEach((el: string, index) => {
    if (index === 0) {
      offset += (60 * 60 * 1000) * parseInt(el) 
    }
    if (index === 1) {
      offset += parseInt(el) * 60 * 1000
    }
  })
  const result = isoDate - offset
  return  moment(result).format("hh:mm") 
}

export const MeasurementRow: FC<IMeasurementRowPropsType> = ({
  measurement,
}) => {
  const { glucose, date } = measurement;
 
  return (
    <View key={date} style={styles.row}>
      <Text style={styles.icon}>{iconView(parseFloat(glucose))}</Text>
      <View style={styles.contentRow}>
        <Text style={styles.glucose}>{glucose}</Text>
        <Text> received at {getRealTime(measurement)}</Text>
      </View>
    </View>
  );
};

const iconView = (glucose: number) => {
  if (glucose <= 5) return "🚀";
  if (glucose > 5 && glucose < 7) return "⏰";
  return "🆘";
};
