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
        console.log(`Inner value ${j}`)
    }
}