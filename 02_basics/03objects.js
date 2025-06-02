//singleton is not made when literal object is created

//object literals

const mySym = Symbol("Key1") //for further use..

const user = {
    name: "Sudhanshu",
    "last name": "Chaurasia",
    [mySym]: "101103", // for using symbol as key, use square brackets
    age: 30,
    location: "Ayodhya",
    email: "sudha@gmail.com",
    isLoggedIn: true,
    lastLogin: ["Monday",  "Wednesday"],
    greetings: function(){
        console.log(`Hello, how are you ${this.name}?`);
    }
}
// console.log(user.name); // not recommended
console.log(user["name"]); // recommended
console.log(user["last name"]);

console.log(user[mySym]); // only way of accessing symbol property

user.email = "sudhanshu101103@gmail.com" // updating email
console.log(user.email);

Object.freeze(user); // freeze the object, no changes allowed

user.age= 31; // this will not work as the object is frozen
console.log(user); // age still 30
//.freeze() is shallow, nested objects can still be modified

console.log(user.greetings()); // calling the method
