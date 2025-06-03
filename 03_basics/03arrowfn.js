const user = {
    username: "sudha1011",
    name: {
        first: "Sudhanshu",
        last: "Chaurasia"
    },
    price: 999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.name.first} to our website!`)
        //console.log(this) // shows the scope of the user object
    }
}

user.welcomeMessage()
user.name.first = "Sudha"
user.welcomeMessage()

console.log(this)
// global scope of 'this' in Node.js is an empty object, in browser it is the window object

function showThis() {
    let username = "Sudhanshu"
    console.log(this.username) // undefined in Node.js, "Sudhanshu" in browser
    console.log(this) // shows the global scope
}

showThis()

const Arrow = () => {
    let username = "Sudhanshu"
    console.log(this.username) // undefined in Node.js, "Sudhanshu" in browser
    console.log(this) // shows the global scope, empty object
}
Arrow() // Arrow function does not have its own 'this', it uses the 'this' from the parent scope (means the global scope)

const addition = (num1,num2) => {
    return num1 + num2
}
console.log(addition(10,20))

const addition2 = (num1,num2) => num1 + num2 // implicit return
// const addition2 = (num1,num2) => (num1 + num2) // implicit return with parentheses
console.log(addition2(1,2))

const objects = () => ({username: "Sudhanshu", age: 22}) // implicit return with object
console.log(objects())