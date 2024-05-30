import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { XAxis, Grid, YAxis, LineChart } from "react-native-svg-charts";
import moment from "moment";
import { ChartComponentsPropsType } from "../../../core/types";
import styles from "./chartComponentStyles";
import LinearGradient from "react-native-linear-gradient";
import { getRealTime } from "../../../components/measurementRow/measurementRow";
import { MeasurementValue } from "../../../../types";

const contentInset = { top: 20, bottom: 20 };

let ChartComponent: React.FC<ChartComponentsPropsType> = ({
  allMeasurements,
}) => {
  const reversedArray = [...allMeasurements].reverse()
  const values = reversedArray.map((measurement: any) =>
    parseFloat(measurement.glucose)
  );
  const dates = reversedArray.map(
    (measurement: MeasurementValue) =>
      getRealTime(measurement)
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timerId); // Очистка таймера при демонтировании компонента
  }, []);
  const data = values; //[0.50, 0.10, 0.40, 0.95, 0.4, 0.24, 0.85, 0.91, 0.35, 0.53, 0.53, 0.24, 0.50, 0.20, 0.80]
  return (
    <LinearGradient
      useAngle
      // angle={}
      // start={{ x: 0, y: 1 }}
      // end={{ x: 1, y: 0 }}
      colors={["#c9c9c6", "#cbcada", "#c2c7a9"]}
      style={styles.gradient}
    >
       {loading ? (
        <View
          style={{
            // height: "100%",
            // width: "100%",
            // justifyContent: "center",
            // alignItems: "center",
            flex: 1,
    justifyContent: 'center',
          }}
        >
         <ActivityIndicator size="large" color="#white" />
        </View>
      ) : (
        <ScrollView horizontal={true}>
        <View style={styles.container}>
          <YAxis
            data={data}
            contentInset={contentInset}
            style={{ height: 600, width: 20, marginRight: 10 }}
            svg={{ fill: "grey", fontSize: 10 }}
            numberOfTicks={10}
            formatLabel={(value) => `  ${value}`}
          />
          <View style={{ width: "100%", height: 600, paddingLeft: 20 }}>
            <LineChart
              style={{ height: 600, width: "100%" }}
              data={values}
              svg={{ stroke: "white" }}
              contentInset={{ top: 20, bottom: 20 }}
            >
              <Grid />
            </LineChart>
            <XAxis
              style={{ paddingHorizontal: -10 }}
              data={data}
              formatLabel={(value, index) => `${dates[index]}`}
              contentInset={{ left: 20, right: 20 }}
              svg={{ fontSize: 10, fill: "black" }}
              spacingInner={500}
              spacingOuter={500}
            />
          </View>
        </View>
      </ScrollView>
      )}
    </LinearGradient>
  );
};

export default ChartComponent;
