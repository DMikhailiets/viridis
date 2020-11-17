let binaryArrayToBase64 = () => {
    let u8 = new Uint8Array([0x01,0x06])
    let decoder = new TextDecoder('utf8')
    let b64encoded = btoa(decoder.decode(u8))
    return b64encoded
}

export default binaryArrayToBase64