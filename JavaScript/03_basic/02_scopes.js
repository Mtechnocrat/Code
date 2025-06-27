/**
 * Demonstrates variable declarations and object creation in JavaScript, 
 * highlighting different scopes:
 * 
 * - `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined.
 * - `var` is function-scoped or globally-scoped if declared outside a function.
 * 
 * The code also shows how to create an object using `Object.create()` and checks its type.
 * 
 * In JavaScript, understanding scope is crucial for managing variable accessibility and lifetime.
 * Block scope (let, const) helps prevent accidental variable leaks, while function/global scope (var) can lead to unexpected behaviors.
 */
let a="Aiesha";
const b=78;
var x=Object.create({name:"Ayush", age:49});

console.log(typeof x);


