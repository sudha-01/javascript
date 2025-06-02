const marvel = ["ironman", "hulk", "thor"];
const dc = ["superman", "batman", "wonderwoman"];

//marvel.push(dc);
console.log(marvel);
//console.log(marvel[5][2]);
console.log(marvel.concat(dc)); // Concatenates two arrays but does not modify the original arrays

const allHeroes = [...marvel, ...dc]
console.log(allHeroes); // Spread operator to combine arrays, same as concat but more readable

const array = [1,2,[3,4],5,[6,7,[8,9]],10]
console.log(array.flat(2)); // Flattens the array to a specified depth, here depth is 2, can also use infinity

console.log(Array.isArray("Hello World")) // Checks if the given value is an array, returns false for strings

console.log(Array.from("Hello World")) // Converts a string to an array of characters

console.log(Array.from({name: "Sudhanshu"})) // interesting case, gives empty array as the object has no iterable properties


//getting keys of an object as an array
const obj = { name: "Sudhanshu", age: 25 };

const keysArray = Object.keys(obj);
console.log(keysArray); // ['name', 'age']

// getting values of an object as an array
const valuesArray = Object.values(obj);
console.log(valuesArray); // ['Sudhanshu', 25]

// getting entries of an object as an array of key-value pairs
const pairs = Object.entries(obj);
console.log(pairs);
// Output: [['name', 'Sudhanshu'], ['age', 25]]


let num1 =10
let num2 = 20
let num3 = 30

const numbers = Array.of(num1,num2,num3)
console.log(numbers); // Creates an array from the given arguments, similar to "Array.from" but for any number of arguments
