import React from 'react'
import { connect } from 'react-redux'
import { DebugContainerPropsType } from '../../../core/types'
import { fetchLogData } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import DebugComponent from '../component/debug'

let DebugContainer = (props: any ) => {
    return <DebugComponent log={props.log}/>
} 

export default connect(
    (state: AppState) => ({
        log: fetchLogData(state)
    }), null
    )
(DebugContainer)
