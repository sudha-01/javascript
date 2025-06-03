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

sayMyName() //function execution (using brackets)

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

//console.log(loginUserMessage("Sudhanshu")); //basic method

const msg = loginUserMessage("Sudhanshu")
console.log(msg); // storing in a variable and then printing

console.log(loginUserMessage()) //no parameters would return undefined
// to counter this if statement is used
