//do while loop

const array = [1, 2, 3, 4, 5];
let index = 0;
do {
    const element = array[index];
    console.log(`Element at index ${index} is ${element}`);
    index++;
} while (index < array.length);