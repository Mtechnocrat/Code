const coding =['java','cpp','ruby','javaScript'];

// Method 1
coding.forEach(function (value){   //we do not have to give any name for call back functions , function defined here is callback function required by the forEach loop.
    // console.log(`Hello ${value}`);  
})


// Method 2
coding.forEach( (value)=>{
//    console.log(`I love this  ${value} language`);
})

//Method 3
const print=(value)=>{
    //console.log(`The value to be printed ${value}`);
}

 coding.forEach(print); // we have pass the refernce of the function if we have already declared the functions above.

//forEach comes with many parameter like index,  full array list.....

coding.forEach((val,index,arr)=>{
    // console.log(`The valuf from the array ${val} and the index is ${index} and it's from array ${arr}`);
})

const codingLanguages = [
    { language: 'java', compiler: 'javac' },
    { language: 'cpp', compiler: 'g++' },
    { language: 'ruby', compiler: 'ruby' },
    { language: 'javaScript', compiler: 'node' }
];

codingLanguages.forEach((items)=>{
    console.log(`The languague is ${items.language} and it's compiler is ${items.compiler}`);
    
});