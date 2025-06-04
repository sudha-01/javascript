// IIFE - Immediately Invoked Function Expressions

// - to immediately get executed
// - to not get polluted by global scope

(function connect(){   // named IIFE
    console.log(`DB Connected`)
    
})(); // immediately invoked function expression ( similar to connect() )

(
    (name) => {
        console.log(`HI ${name}, YOU HAVE BEEN CONNECTED TO THE SERVER`)
    }
)('SUDHANSHU');

console.log(( (num1, num2) => num1 + num2 )(10, 20)); // iife implicit return
