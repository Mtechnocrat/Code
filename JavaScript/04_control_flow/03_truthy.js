/**
 * JavaScript Falsy Values:
 * These values are considered false when evaluated in a boolean context.
 */
// const falsyValues = [
//     { value: false, description: 'Boolean false' },
//     { value: 0, description: 'Number zero' },
//     { value: -0, description: 'Negative zero' },
//     { value: 0n, description: 'BigInt zero' },
//     { value: '', description: 'Empty string' },
//     { value: null, description: 'Null value' },
//     { value: undefined, description: 'Undefined value' },
//     { value: NaN, description: 'Not-a-Number' }
// ];

/**
 * JavaScript Truthy Values:
 * All values except the above are considered true in a boolean context.
 * Here are some common examples:
 */
// const truthyValues = [
//     { value: true, description: 'Boolean true' },
//     { value: 1, description: 'Non-zero number' },
//     { value: -1, description: 'Negative non-zero number' },
//     { value: 'hello', description: 'Non-empty string' },
//     { value: [], description: 'Empty array' },
//     { value: {}, description: 'Empty object' },
//     { value: function(){}, description: 'Function' },
//     { value: Infinity, description: 'Infinity' }
// ];

// Example: Checking truthiness/falsiness
// falsyValues.forEach(item => {
//     console.log(`${JSON.stringify(item.value)} is falsy:`, !item.value);
// });

// truthyValues.forEach(item => {
//     console.log(`${JSON.stringify(item.value)} is truthy:`, !!item.value);
// });



/**
 * Nullish Coalescing Operator (??):
 * The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined.
 * It is useful for providing default values only when a variable is nullish (null or undefined), 
 * but not for other falsy values like 0, '', or false.
 */

// Example:
const userInput = null;
const defaultValue = 'Default';

const result = userInput ?? defaultValue;
console.log(`Result using ?? :`, result); // Output: "Default"

// Compare with logical OR (||), which returns the right-hand operand for any falsy value:
const userInput2 = '';
const resultOr = userInput2 || defaultValue;
// const resultNullish = userInput2 ?? defaultValue;
console.log(`Result using || :`, resultOr);      // Output: "Default"
// console.log(`Result using ?? :`, resultNullish); // Output: ""