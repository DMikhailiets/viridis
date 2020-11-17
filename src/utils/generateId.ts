let generateId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    let date = new Date()
    return '_' + Math.random().toString(36).substr(2, 9) + date.getMilliseconds() ;
  }

  export default generateId
