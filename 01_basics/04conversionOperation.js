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

// Operations:-

let num1 = 10
let negnum = -num1
console.log(negnum) // Output: -10 (Negation)

console.log(2 + 2);    // Output: 4 (Addition)
console.log(2 - 2);    // Output: 0 (Subtraction)
console.log(2 * 2);    // Output: 4 (Multiplication)
console.log(2 ** 3);   // Output: 8 (Exponentiation: 2 to the power of 3)
console.log(2 / 3);    // Output: 0.6666666666666666 (Division)
console.log(2 % 3);    // Output: 2 (Modulus: remainder of 2 divided by 3)

let str1 = "hello"
let str2 = " sudha"
let str3 = str1 + str2
console.log(str3) // Output: "hello sudha" (String Concatenation)

//below coercions are not recommended as they can lead to unexpected results

//console.log(2 + "2"); // Output: "22" (String Concatenation, not addition)
//console.log(2 - "2"); // Output: 0 (Subtraction, string is converted to number)

//console.log(1 + 2 + "2"); // Output: "32" (1 + 2 = 3, then "3" + "2" = "32")
//console.log(1 + "2" + 2); // Output: "122" (1 + "2" = "12", then "12" + 2 = "122")
//console.log("1" + 2 + 2); // Output: "122" ("1" + 2 = "12", then "12" + 2 = "122")

let x = "3"
console.log(++x) // ++"3" wont work