let getFullByte = (number: string) => {
    let str = new Array(8 - number.length +1 ).join('0');
    return str +  number
}

export default getFullByte