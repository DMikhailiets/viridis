import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./allMeasurementsStyles";
import LinearGradient from "react-native-linear-gradient";
import { MeasurementRow } from "../../../components/measurementRow/measurementRow";
import { MeasurementValue } from "../../../../types";

let AllMeasurementsComponent: React.FC<any> = (props) => {
  console.log(">>> ", props.allMeasurements.length);
  console.log(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timerId); // Очистка таймера при демонтировании компонента
  }, []);
  const logArray = [...props.allMeasurements].reverse().map((measurement: any) => (
    <Cart key={measurement.id} measurement={{...measurement}}>
      {measurement.glucose}
    </Cart>
  ));
  console.log(2);
  return (
    <View style={styles.container}>
      {loading || !props.allMeasurements.length ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="#white" />
        </View>
      ) : (
        <ScrollView>{logArray}</ScrollView>
      )}
    </View>
  );
};

export default AllMeasurementsComponent;

interface CartPropsType {
  measurement: MeasurementValue
}

let Cart: FC<CartPropsType> = ({measurement}) => {
  const date = new Date(measurement.date).getTime()
  const offset = measurement.TimeOffset
  const result = date - offset
  return (
    <View style={styles.cart}>
      <MeasurementRow  measurement={measurement}/>
    </View>
  );
};
