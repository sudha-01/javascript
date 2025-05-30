let score = 98

console.log(typeof score) // number

//conversion if the number is a string

let secScore = "98"

console.log(typeof secScore) // string

let valueInNumber = Number(secScore)
console.log(valueInNumber)
console.log(typeof valueInNumber) // number

//possible errors in conversion

let thirdScore = "98abc"
let valueInNumber2 = Number(thirdScore)
console.log(valueInNumber2) // NaN (Not a Number)

//null is converted to 0
//undefined is converted to NaN
//boolean is converted to 1 or 0
//number 1 an 0 can be converted to boolean true and false respectively
// empty and non empty strings are converted to 0 and 1 respectively
// whitespace is also converted to 0