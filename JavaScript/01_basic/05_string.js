const name="Adam";
const age=50;

console.log(name +age);
console.log(`Hello my name is ${name} and my age is ${age}`);


const show = new String("The Big Bang Theory");
console.log(show);

console.log(show.length); //gives the length of the string
console.log(show.__proto__);// shows the prototype of the string object
console.log(show.toUpperCase());// converts the string to uppercase
console.log(show.toLowerCase());// converts the string to lowercase
console.log(show.charAt(5));// gives the character at index 5
console.log(show.indexOf("Big"));// gives the index of the first occurrence of the substring
console.log(show.lastIndexOf('B'));// gives the last index of the substring

const newStr=show.substring(0,10); // last value not included
console.log(newStr);

const anotherStr= show.slice(-19,2);
console.log(show.slice(-19,10));

const longName="hey my name is khan";
console.log(longName.replace('name','skin'));

console.log(show.split(" "));
const arr=show.split(" ");

console.log(arr[1]);

