const accoundId = 101103
let accountEmail = "sudhanshu@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

let accountState; // its value is undefined unless assigned

// const cannot be reassigned
// accoundId = 101104 // This will throw an error

console.log(accoundId); // 101103

accountEmail = "sudha101@gmail.com"
accountPassword = "1000001"
accountCity = "Mumbai"

// another way to print multiple variables
console.table([accoundId, accountEmail, accountPassword, accountCity])

/* 
dont use var
because it has issue in block scope and functional scope.
*/

