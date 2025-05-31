console.log("2" > 1) // returns true because "2" is converted to a number

console.log(null > 0) // returns false because null is converted to 0

console.log(null == 0) // returns false because null is not equal to 0
console.log(null >= 0) // returns true because null is converted to 0

// the above happened because equality check and comparison operators behave differently
// comparison converts null to 0, but equality check does not.

let x = Number(undefined)

console.log(x) //getting NaN because undefined is not a number

// strict check (===) does not convert types

console.log(undefined == null) // returns true because both are considered equal in loose equality check
console.log("2" === 2) // returns false because strict equality check does not convert types
