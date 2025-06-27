const nums=[1,2,3,4];
//reduce is used to reduce the array to a single value.
// It takes a callback function and an initial value as arguments.
const total=nums.reduce(function (acc,currVal){  //acc is accumulator and currVal is current value are the parameters of the callback function.
    //console.log(acc);
    return acc+currVal;
},0)

//console.log(total);

const grandTotal=nums.reduce((acc,currVal)=> (currVal*acc),1);
// console.log(grandTotal);


const courses = [
    { name: "JavaScript Basics", price: 29.99 },
    { name: "Advanced Python", price: 39.99 },
    { name: "React for Beginners", price: 34.99 },
    { name: "Node.js Essentials", price: 24.99 },
    { name: "Data Structures", price: 19.99 },
    { name: "Machine Learning Intro", price: 49.99 },
    { name: "Web Development Bootcamp", price: 59.99 }
]; 

const totalPrice=courses.reduce((acc,curr)=>acc+curr.price,0);
console.log(totalPrice);


