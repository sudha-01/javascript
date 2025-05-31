let aaa = "hello"

const abc = "Sudhanshu"

const age = 21

console.log(`${aaa} my name is ${abc} and I am ${age} years old`);
//new way of writing strings
// clearly readable

console.log(aaa.charAt(4))
console.log(aaa.substring(1, 4))
//returns string from index 1 to 4 not including 4 i.e. "ell"

console.log(aaa.slice(-4, -1)) // returns string from index -4 to -1 not including -1 i.e. "hel"
//slice is similar to substring but it can take negative values

let name = " sudhanshu    "
console.log(name.trim()) // removes whitespace from both ends of a string

const url = "https://www.sudhanshu.com/sudhaa%20chaurasia"
let url1 = url.replace('%20', ' ') // replaces %20 with space
console.log(url1)

let sent = "My dog is cuter than your cat"

let sent1 = sent.split(" ")
console.log(sent1) // splits the string into an array of words;
