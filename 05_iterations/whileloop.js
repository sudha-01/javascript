// while loop

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

let i = 0;
while (i <= 4){
    let star = "";
    let j = 0;
    while (j <=i){
        star+= "*";
        j++;
    }
    console.log(star);
    i++;
} // star pattern


let arr = ["delhi","mumbai","kolkata"]

let c = 0;
let city = "";

while(c < arr.length){
    city += arr[c] + " ";
    c++;
}

console.log(city); // output of loop in single line


// do while loop ( code block is executed before checking the condition)

let score = 1

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <=10);

console.log(score);
// if value of score is initially 11 then it will print "Score is 11" and then exit the loop
// because checking condition after executing the code block
