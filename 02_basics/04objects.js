const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    id: "235ops",
    name: {
        first: "Jane",
        last: "Doe"
    },
    isLoggedIn: true
}

console.log(regularUser.name.last) // accessing nested object property

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

const obj22 = {obj1, obj2} // this will not merge the objects, it will create a new object with obj1 and obj2 as properties 
console.log(obj22) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj3 = Object.assign({},obj1,obj2) //better way to merge objects, extra parantheses used to create an empty object as the target where all objects will be merged
console.log("Obj 3",obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//best way to merge objects-> spread operator
const obj4 = {...obj1, ...obj2}
console.log("Obj 4", obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Object.keys() returns an array of the object's own enumerable property names
const keys = Object.keys(tinderUser) // very important in projects
console.log(keys) // in array form
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // less used

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// to check if a property exists in an object

console.log(regularUser.name.hasOwnProperty('first'))
