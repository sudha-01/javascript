// const array = ["sudha","sudhanshu","aditya","ramesh","suresh"]


// const value = array.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(value); // returns undefined as for each doesnt return anything

const numArray = [1,2,3,4,5,6,7,8,9,10]

const specNum = numArray.filter( (item) => item >4) // return the elements that satisfy the condition
// const specNum = numArray.filter( (item) => {
//     return item > 4     // need to 'return' the statement when adding a scope{}
// })
console.log(specNum);

const newNums = []

numArray.forEach((item) => {
    if(item>4){
        newNums.push(item)
    }
}) // filter operation using forEach

console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

const updatedBooks = books.filter((item) => item.edition > 2000)
// const updatedBooks = books.filter((item) => item.edition > 2000).map((item) => item.title) // use of map
const histBooks = books.filter((item) => item.publish >= 1995 && item.genre === "History")

console.log(updatedBooks);
console.log(histBooks);
