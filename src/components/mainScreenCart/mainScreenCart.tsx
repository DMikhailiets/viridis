import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import { MeasurementValue } from "../../../types";
import { LevelWidget } from "../levelWidget/levelWidget";
import { ConnectionWidget } from "../connectionWidget/connectionWidget";
import { TimeWidget } from "../timeWidget/timeWidget";
import { styles } from "./mainScreenCart.styles";
import { LastThreeMeasurements } from "../lastThreeMeasurements/lastThreeMeasurements";
import { CriticalWidget } from "../criticalWidget/criticalWidget";
import { Image } from 'react-native';

interface IMainScreenCartPropsType {
  currentValue: MeasurementValue[];
  isConnected: boolean;
  lastMeasurements: MeasurementValue[];
}
const MainScreenCart: FC<IMainScreenCartPropsType> = (props) => {
  const { currentValue, isConnected, lastMeasurements } = props;
  return (
    <View style={styles.cart}>
      <View style={styles.topContainer}>
        <View style={styles.topContainerLeftGroup}>
          <LevelWidget
            previoustValue={currentValue[0]}
            currentValue={currentValue[1]}
          />
          <ConnectionWidget isConnected={isConnected} />
        </View>
        <TimeWidget date={currentValue[1].date} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.critical}>
        <CriticalWidget/>
        <View style={styles.logo}>
          <Image source={require('../../../assets/images/viridis-logo.png')} style={{width: '100%', height: 80}} />
        </View>
        </View>
        <LastThreeMeasurements measurements={lastMeasurements}/>

      </View>
    </View>
  );
};
export default MainScreenCart;
