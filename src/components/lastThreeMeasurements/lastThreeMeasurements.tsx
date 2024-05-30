import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./lastThreeMeasurements.styles";
import { MeasurementRow } from "../measurementRow/measurementRow";
import { MeasurementValue } from "../../../types";

interface ILLastThreeMeasurementsPropsType {
  measurements: MeasurementValue[];
}
export const LastThreeMeasurements: FC<ILLastThreeMeasurementsPropsType> = ({measurements}) => {
  const elements = [...measurements].reverse().map((el: MeasurementValue) => {
    return <MeasurementRow measurement={el} />;
  });
  return <View style={styles.wrap}>{elements}</View>;
};
