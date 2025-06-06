// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

for( let i =0; i<= 5; i++){
    console.log(`Outer value ${i}`)
    for(let j = 0; j <= 5; j++){
        console.log(`Inner value ${j} and outer value ${i}`);
    }
} // visualising nested loops value changes

for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
} // multiplication tables form 1 to 10



// for loop with break and continue

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`Detected 5, breaking the loop`)
        break; // exits the loop when index is 5
    }
    console.log(`Value of i is ${index}`)
}

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`Detected 5, skipping this iteration`);
        continue; // skips the current iteration when index is 5
    }
    console.log(`Value of i is ${index}`);
}

