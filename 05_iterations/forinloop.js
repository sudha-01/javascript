//for in loop

const myobj = {
    'ayc': 'ayodhya',
    'ndls': 'new delhi',
    'bui': 'ballia'
}

for (const key in myobj) {
    //console.log(key) // to get object keys
    //console.log(myobj[key]) // to get key values
    console.log(`${key} is the code for ${myobj[key]}`) // to get both together
} // for in loop on object

const codes = ['ayc','bui','ndls','dli','csmt']

for (const key in codes) {
    console.log(key); // will only give keys (index for arrays)
    console.log(codes[key]);
} // for in loop on array



const map = new Map()

// const map = new Map([
//   ["a", 1],
//   ["b", 2]
// ]);
//another way to set map

map.set("first",1) //preferable
map.set("second",2)
map.set("third",3)
map.set("fourth",4)
map.set("fifth",5)

for (const key in map) {
    console.log(key);
} // map is not iterable using for in loop, returns nothing

