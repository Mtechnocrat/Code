//array

const arr=[];
console.log(arr);

const arr2=[2,3,4,5,6];
console.log(arr2);

const arr3=new Array("Ramu","Tony");
console.log(arr3);


//array methods
arr.push(4) // add new elmentws at last 
console.log(arr);

arr.pop() // remove element from the last 
console.log(arr);

arr.unshift(3) // add new elements at the begnning 
console.log(arr);

arr.shift() // remove first  element at the begnning 
console.log(arr);

console.log(arr2.includes(3));
console.log(arr2.indexOf(3));
console.log(arr2.lastIndexOf(3));


const newArr=arr2.join(); // return in String
console.log(newArr);




const na1=arr2.slice(1,4); // return a shallow copy of a portion of an array into a new array object
// The original array will not be modified.
// The slice() method selects from start to end (end not included).
console.log(na1);
console.log("Slice" ,arr2);



const na2=arr2.splice(1,4); // remove elements from the array and return them
// The original array will be modified.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(na2);
console.log("Splice" ,arr2);





