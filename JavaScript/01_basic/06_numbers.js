const num=10;
console.log(num);


const newNum=new Number("500");
console.log(newNum);

console.log(newNum.toString()); // converts the number to string
console.log(newNum.toString().length); // gives the length of the string representation of the number
console.log(newNum.toFixed(2)); // formats the number to 2 decimal places

const otherNumber=123.456;
console.log(otherNumber.toPrecision(4)); // formats the number to 4 significant digits

const hundered=100000000;
console.log(hundered.toLocaleString('en-IN')); // formats the number to a locale-specific string


const max=10;
const min=17;


console.log(Math.floor(Math.random() * (max-min +1) + min));

