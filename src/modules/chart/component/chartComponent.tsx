import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { XAxis, Grid, YAxis, LineChart } from 'react-native-svg-charts'
import moment from 'moment'

import { ChartComponentsPropsType, DebugComponentPropsType, MainScreenComponentPropsType } from '../../../core/types'
import styles from './chartComponentStyles'

const contentInset = { top: 20, bottom: 20 }

let ChartComponent: React.FC<ChartComponentsPropsType> = ({allMeasurements}) => {
    const values = allMeasurements.map((measurement: any) => parseFloat(measurement.glucose))
    const dates = allMeasurements.map((measurement: any) => moment(measurement.date).format('DD.MM.YYYY'))
    const data = values//[0.50, 0.10, 0.40, 0.95, 0.4, 0.24, 0.85, 0.91, 0.35, 0.53, 0.53, 0.24, 0.50, 0.20, 0.80]
    // debugger
    return (
    <ScrollView horizontal={true}>
        <View style={styles.container} >
      <YAxis
        data={data}
        contentInset={contentInset}
        style={{ height: 600, width: 20, marginRight: 10 }}
        svg={{ fill: 'grey', fontSize: 10,}}
        numberOfTicks={10}
        formatLabel={(value) => `  ${value}`}
      />
      <View style={{width: '100%', height: 600, paddingLeft: 20}}>
        <LineChart
          style={{ height: 600, width: '100%' }}
          data={values}
          svg={{ stroke: '#38C0F3'}}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
        <XAxis
          style={{ paddingHorizontal: -10 }}
          data={data}
          formatLabel={(value, index) => `${dates[index]}`}
          contentInset={{ left: 20, right: 20 }}
          svg={{ fontSize: 10, fill: 'black' }}
          spacingInner={500}
          spacingOuter={500}
        />
      </View>            
    </View>
    </ScrollView>)
}
export default ChartComponent

