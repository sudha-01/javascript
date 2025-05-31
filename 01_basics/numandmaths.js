const balanceAccount = new Number(1000.8722792);

console.log(balanceAccount);

console.log(balanceAccount.toString().length); // Convert to string and get length

console.log(balanceAccount.toFixed(2)); // Format to 2 decimal places, returns string value (why?)

console.log(balanceAccount.toPrecision(5)); // Format to 5 significant digits i.e. 1000.9

const price = 1000000
console.log(price.toLocaleString('en-IN')); // Format to locale string, returns string value



// Mathematics ------------

console.log(Math.PI)
console.log(Math.abs(-10)); // Absolute value (10)
console.log(Math.round(10.68)); // Round to nearest integer (11)
// ceil and floor are also available, ceil takes the next integer up, floor takes the next integer down

console.log(Math.random()) // Random number between 0 and 1

let randInt = Math.floor(Math.random() * 10) + 1;  // gives only integers from 1 to 10
console.log(randInt);

let min = 10
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min and max, inclusive
