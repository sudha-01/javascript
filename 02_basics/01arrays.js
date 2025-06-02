const arr = [1,2,3,4,5]

console.log(arr);

const arr2 = new Array(1,3,5,7,9)
console.log(arr2[2]); 
console.log(typeof arr2); //returns object

// Array methods

arr.push(6); // adds 6 to the end of the array, can add multiple elements
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr2.pop(); // removes the last element of the array
console.log(arr2); // [1, 3, 5, 7]

const heros = ["Batman", "Superman", "Iron Man", "Thor"]
heros.unshift("Hulk"); // adds Hulk to the beginning of the array
console.log(heros);
heros.shift(); // removes the first element of the array
console.log(heros);

//includes -> checks if an element is present in the array
// indexOf -> returns the index of the element in the array
console.log(arr.indexOf(5));
console.log(arr.indexOf(10));

const newArr = arr.join();
console.log(newArr); // output -> "1,2,3,4,5"

// slice and splice

const myArr = [0,1,2,3,4,5]
console.log(myArr.slice(1, 3)); // output -> [1, 2, 3] (does not modify the original array)
console.log(myArr); // output -> [0, 1, 2, 3, 4, 5] (original array remains unchanged)

myArr.splice(1, 3); // removes 3 elements starting from index 1
console.log(myArr); // output -> [0, 4, 5] (modifies the original array)

// slice just returns a portion of the array without modifying it
// splice modifies the original array by removing or adding elements (adding later)