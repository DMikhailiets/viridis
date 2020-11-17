import React from 'react'
import { connect } from 'react-redux'
import { fetchAllMeasurements } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import AllMeasurementsComponent from '../component/allMeasurements'

let AllMeasurementsContainer = (props: any ) => {
    return <AllMeasurementsComponent allMeasurements={props.allMeasurements} />
} 
export default connect(
    (state: AppState) => ({
        allMeasurements: fetchAllMeasurements(state)
    }), null
    )
(AllMeasurementsContainer)

