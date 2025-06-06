// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values: (any value other than falsy values)
// "0", "false", " ", [], {}, function(){} -->empty function


const userMail = ""

if (userMail) {
  console.log("Mail is:", userMail)
} else{
    console.log("No mail provided")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
} //checking for an empty object

const emptyArr = []
if(emptyArr.length === 0){
    console.log("Array is empty")
} // checking for an empty array



// Nullish Coalescing Operator (??): null undefined

let val1 = null ?? 10;
const val2 = undefined ?? function(num1){
    return num1 * 2;
}
let val3 = null ?? 35 ?? 32; //first truthy value is returned

console.log(val1);
console.log(val2(val1));
console.log(val3);



// Terniary Operator: condition ? exprIfTrue : exprIfFalse

const price = 100
price > 100 ? console.log("Expensive") : console.log("Affordable");
