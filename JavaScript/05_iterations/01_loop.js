//for


const array=[1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element at index ${index} is ${element}`);
    
    
}
// JavaScript don't have outOfBound errors, it gives undefined


//  break and continue
// break: exits the loop immediately    
// continue: skips the current iteration and moves to the next one

// Example of break
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log('Found 3, breaking the loop');
        break;
    }
    console.log(array[i]);
}

// Example of continue
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(`Odd number: ${array[i]}`);
}