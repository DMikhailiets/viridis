import Buffer from 'buffer' 
import { getFullByte, getInAdditionalCode } from '.'

function getDate () {
    return new Date()
}

function getGlucoseValue (data: any) {
    let a = 12
    let glucoseValueBytes = getFullByte(data[13].toString(2)) + getFullByte(data[12].toString(2))
    let exp = getInAdditionalCode(glucoseValueBytes.slice(0,4))
    let mantisa =  glucoseValueBytes.slice(4)
    let glucose =  (parseInt(mantisa, 2) * (10**exp)).toFixed(2) 
    return glucose
}

function getSequenceNumber (data: any) {
    return parseInt(data[2].toString(16) + data[1].toString(16), 16)
}

function getTimeOffset (data: any) {
    return parseInt(data[11].toString(16) + data[10].toString(16), 16)
}

function getbaseTime (data: any) {
    return `${data[7]}:${data[8]}:${data[9]}`
}
let decodeFromBinary = (base: string) => {
    let decode = Buffer.Buffer.from(base , 'base64')
    return {
        glucose: getGlucoseValue (decode), 
        SequenceNumber: getSequenceNumber(decode),
        BaseTime: getbaseTime(decode),
        TimeOffset: getTimeOffset(decode),
        date: getDate(),
        id: Date.now()
    }
}

export default decodeFromBinary