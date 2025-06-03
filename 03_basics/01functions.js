function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

//sayMyName() //function execution (using brackets)

function addNumbers(num1,num2){
    console.log(num1 + num2);
}

const result = addNumbers(99,null)
console.log("Result is :",result); // returns undefined
//console.log() never returns anything, it just prints what's in the brackets

function addTwoNumbers(num1,num2){
    let result = num1+num2
    return result; //nothing gets printed after return statement
 // return num1+num2
}

const finalres = addTwoNumbers(3,7);
console.log("Result is:", finalres); // returns 10


function loginUserMessage(username = "user"){   //another way to avoid empty strings or no values
    if(!username){          // (username === undefined)
        console.log("Please enter a username")
        return
    }
    return `${username} have been successfully logged in`
}

console.log(loginUserMessage("Sudhanshu")); //basic method

const msg = loginUserMessage("Sudhanshu")
console.log(msg); // storing in a variable and then printing

console.log(loginUserMessage()) //no parameters would return undefined
// to counter this if statement is used



function calculateCartPrice(...num1){  //rest operator
    return num1
}

console.log(calculateCartPrice(200,300,400));

// function calculateCartPrice1(val1, val2, ...num1){  //val1 and val2 for first two values rest goes in the array
//     return num1
// }
// console.log(calculateCartPrice1(200,300,400,2000));

const product = {
    name: "Cricket kit",
    price: 7000
}

function handleObject(anyobject){
    console.log(`The product name is ${anyobject.name} and its price is ${anyobject.price}`);
}

handleObject(product)
// problem might occur if the key name doesnt match with the provided one in the function
// typechecking is necessary, typescript is better in this but js can also do it

handleObject({
    name: "Lux Cozi",
    price: 100
}) // another method to pass objects directly

const array = [100,200,500,900]

function handleArray(myArray){
    console.log(`the value of the third index is ${myArray[3]} and second index is ${myArray[2]}`)
    return myArray[0]
}

console.log(handleArray(array))
console.log(handleArray([0,1,2,3,4]))