import React from 'react'
import { connect } from 'react-redux'
import { fetchAllMeasurements } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import ChartComponent from '../component/chartComponent'

let ChartContainer: React.FC<any> = (props) => {
    return <ChartComponent allMeasurements={props.allMeasurements}/>
} 

export default connect(
    (state: AppState) => ({
        allMeasurements: fetchAllMeasurements(state)
    }), null
    )
(ChartContainer)
