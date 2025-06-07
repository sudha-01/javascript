// array.map()

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.map((item)=>item+10)
console.log(newNums);

// command chaining
const newArr = nums
    .filter(item => item % 2 === 0)
    .map(item => item+5);
console.log(newArr); // getting the array with numbers that are divisible by 2 added by 5

