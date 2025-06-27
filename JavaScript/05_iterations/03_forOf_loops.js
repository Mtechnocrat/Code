//for of
//for of loop is used to iterate over iterable objects like arrays, strings, etc.
// It provides a simpler syntax compared to the traditional for loop and is more readable.  
const arr=[1,2,3,4,5];

for (const i of arr) {
   // console.log(`Print ${i}`);
    
}
//for of loop can be used with strings as well
const name="Ayush";

for (const i of name) {
   // console.log(`print the letter of name ${i}`);
}

//Maps
const map=new Map();
map.set('Ayush',233);
map.set('Ram',23);


for (const [key,value] of map) {  // square brackets are used to destructure the key and value from the map
    console.log(`Key ${key} and value ${value}`);
    
}

// console.log(map);
// for of methods don't work with objects, it only works with iterable objects like arrays, strings, maps, sets, etc.
