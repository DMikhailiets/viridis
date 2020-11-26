import Buffer from 'buffer' 

let decodeSpec = (base: string) => {
    let decode = Buffer.Buffer.from(base , 'base64')
    let SequenceNumber = parseInt(decode[2].toString(16) + decode[1].toString(16), 16)
    let BaseTime = `${decode[7]}:${decode[8]}:${decode[9]}`
    let TimeOffset = parseInt(decode[11].toString(16) + decode[10].toString(16), 16)
    let specObj = {
        "SequenceNumber" : SequenceNumber,
        "BaseTime" : BaseTime,
        "TimeOffset" : TimeOffset
    }
    return specObj
}

//console.log(decodeSpec("B8dOAAAAAAAJAJd3PPAA"))
export default decodeSpec