let a = 1000 //global scope variable

if(true){
    let a = 10; //block scope variable
    console.log("block scope value of a: ", a);
    
    var abc = 20
    console.log(abc)
    
}

abc = abc - 5

console.log("Global Scope value of a: ",a);
console.log(abc);

//node environment global scope is different than browser environment global scope (why?)

if(true){
    a = a - 50;
    console.log("Global Scope value of a after modification: ", a);
    //global scope varibales can be used/modified in block scope which will persist outside the block
}

console.log(a); // vale is 950  now

console.log("\n")

//nested scopes

function one(){
    const userName = "Sudhanshu"
    function two(){
        const software = "Github Codespaces"
        console.log(userName) // will work
    }
    //console.log(software) // This will throw an error because software is not defined in this scope
    two()
}
one() // wont work if we comment two() function call

// child functions can access parent function variables but not vice versa

if(true){
    let num = 100
    if(true){
        let num2 = 200
        console.log(num+num2)
    }
    //console.log(num2-num) // wont work
}
//console.log(num+num2); // wont work

// ----------hoisting-------------

console.log(addone(5)); // This will work because function declarations are hoisted
function addone(num){
    return num + 1
}

//addtwo(5) // This will throw an error because addtwo variable is not defined yet
const variable = function addtwo(num){  // this is a function expression, not hoisted
    return num + 2
}

// we can use a function before it is defined in the code — but only for function declarations, not expressions.