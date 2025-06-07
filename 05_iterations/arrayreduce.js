const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.reduce((accu,curr) => {
    console.log(`acc: ${accu}`);
    return accu+curr
},0)
console.log(newNums);

const newNums2 = myNums.reduce((accu,curr) => accu+curr,0)
console.log(newNums2);  //implicit


const shopping = [
    {
        name: "susie",
        amount: 300
    },
    {
        name: "john",
        amount: 450
    },
    {
        name: "abraham",
        amount: 100
    },
    {
        name: "karen",
        amount: 847.20
    }
]

const finalSales = shopping.reduce((acc,curr) => acc + curr.amount, 0)
console.log(finalSales);