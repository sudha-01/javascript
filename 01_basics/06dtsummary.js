//datatypes is classified in two categories:
// primitive and non-primitive(reference)

// these are categorised on the basis of how they are stored and accessed in memory

//primitve:
// 7 types: string, number, boolean, null, undefined, symbol, bigint

//reference:
// 3 types: array, object, function
// reference datatypes(array,object) return object type when checked with typeof operator
// function is an object function

const numberr = 30976637939300829467n
console.log(typeof numberr) // bigint;

function aanama(params) {
    console.log("hello world");
    
}

console.log(typeof aanama) // function;

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr) // object;