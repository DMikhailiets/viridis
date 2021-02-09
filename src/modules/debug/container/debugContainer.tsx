import React from 'react'
import { connect } from 'react-redux'
import { DebugContainerPropsType } from '../../../core/types'
import { fetchLogData } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import DebugComponent from '../component/debug'
import { resetMeasurementsDataFromLocalstorage, resetMeasurementsDataFromRedux, resetAllMeasurementsData } from '../../../redux/reducers/deviceReducer'
let DebugContainer: React.FC<any> = ({
    resetMeasurementsDataFromLocalstorage,
    resetAllMeasurementsData,
    resetMeasurementsDataFromRedux,
     ...props} ) => {
    return <DebugComponent
        resetMeasurementsDataFromRedux={resetMeasurementsDataFromRedux}
        resetAllMeasurementsData={resetAllMeasurementsData}
        resetMeasurementsDataFromLocalstorage={resetMeasurementsDataFromLocalstorage}
        log={props.log}
        />
} 

export default connect(
    (state: AppState) => ({
        log: fetchLogData(state)
    }), {
        resetMeasurementsDataFromLocalstorage,
        resetMeasurementsDataFromRedux,
        resetAllMeasurementsData
    }
    )
(DebugContainer)
