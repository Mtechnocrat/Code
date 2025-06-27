
const nums=[1,2,3,4,5,6,7,7,8,9,10];

const inc=nums.map((items)=>{
    return items+10;
});

// console.log(inc);


const chain=nums.map((num)=>num*10).map((num)=>num+1);
console.log(chain);

// Properties of Array.prototype.map():
// 1. Creates a new array with the results of calling a provided function on every element in the calling array.
// 2. Does not modify the original array (non-mutating).
// 3. The callback function receives three arguments: currentValue, index, and the original array.
// 4. Returns a new array of the same length as the original.
// 5. Does not execute the callback for array elements without values (i.e., holes in sparse arrays).
// 6. Can be chained with other array methods for functional programming.