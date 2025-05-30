"use strict"; //treat all JS code as ES6 (newer js version)

// alert ( 3 + 3) //wont run in node.js, only in browser

//code readability is first priority while writing code

// use tc39 and mdn docs for reference..

let aname = "John"; //string
let age = 30; //number
let isLoggedIn = true; //boolean

//number - value can range from -2^53 to 2^53
//bigint - used for larger numbers
//string - ""
//boolean - true or false
//null - standalone value, no value
//undefined - variable is declared but not assigned a value (let accountState;)
//symbol - unique and immutable value, used for object properties

//object - collection of key-value pairs, can be mutable or immutable

console.log(typeof aname);
console.log(typeof null); //object, this is a bug in JS, null is not an object
console.log(typeof undefined); //undefined  