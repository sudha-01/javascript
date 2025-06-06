// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
} // for of loop on array



const greeting = "Salaam Shaab Zi"

for (const greet of greeting) {
    if(greet === " "){
        continue;
    }
    console.log(`each char is ${greet}`);
    
} // for of loop on string



// Maps
const map = new Map()

map.set("first",1)
map.set("second",2)
map.set("third","js")
console.log(map);
// maps hold the key-value pairs and remembers the original insertion order of the keys
// maps would only take unique values, wont return a pair two times if initialized twice

for (const [key,value] of map) {
    console.log(key, ":", value);
} // for of  loop on map



// const myObj = {
//     name: "Sudhanshu",
//     age: 23,
//     height: "176cm"
// }

// for (const obj of myObj) {
//     console.log(obj);
    
// }
// objects can't be iterated using forof loop, though there are other ways(?)

