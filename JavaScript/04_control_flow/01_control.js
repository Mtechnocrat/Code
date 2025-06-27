//if
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false    
}


// Example 1: Implicit type coercion
let value = "5";
if (value == 5) { // '==' does type coercion
    console.log("Implicit: value is equal to 5 (type coerced)");
} else {
    console.log("Implicit: value is not equal to 5");
}

// Example 2: Explicit type conversion
let strNum = "10";
let num = Number(strNum); // explicit conversion
if (num === 10) { // '===' checks type and value
    console.log("Explicit: num is exactly 10");
} else {
    console.log("Explicit: num is not 10");
}

// Example 3: Implicit type coercion in boolean context
let emptyStr = "";
if (emptyStr) {
    console.log("Implicit: empty string is truthy");
} else {
    console.log("Implicit: empty string is falsy");
}