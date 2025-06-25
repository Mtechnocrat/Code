let score ="3sdf444";

console.log(typeof score); // number

let value=Number(score);
console.log(value); // 

// 33 => 33;
// "33" => 33;
// "33sdf" => NaN;
// true => 1 false => 0;

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn); // true

// 1 => true; 0=> false;
//""=>false; 
//"something" => true;


// Operatioons

console.log(3 + 4); // 7
console.log("3" + 4); // "34"
console.log(3 + "4"); // "34"   
console.log("3" + "4"); // "34"

console.log(1+3+"4"); // "44"
console.log(1+"3"+true); // "13true"

console.log(1+true); // 2
console.log(1+false); // 1