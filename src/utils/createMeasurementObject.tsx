import { base64ToBinaryArray, decodeDataFromBinary, getFullByte, getInAdditionalCode } from "."

const createMeasurementObject = (action: any) => {
    let dateObj = new Date()
    let data = base64ToBinaryArray(action.measurement)
    let glucoseValueBytes = getFullByte(data[13].toString(2)) + getFullByte(data[12].toString(2))
    let exp = getInAdditionalCode(glucoseValueBytes.slice(0,4))
    let mantisa =  glucoseValueBytes.slice(4)
    let glucose =  (parseInt(mantisa, 2) * (10**exp)).toFixed(2) 
    let meta = decodeDataFromBinary(action.measurement)
    let date = `${dateObj.getFullYear()}.${dateObj.getMonth()}.${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
    return ({
        date,
        value: glucose,
        sequenceNumber: meta.SequenceNumber,
        baseTime: meta.BaseTime,
        timeOffset: meta.TimeOffset
    })
}

export default createMeasurementObject