//Making of object from literal
const obj={}

const sym=Symbol("Key1");


const ob1={
    name : "Ayush",
    [sym]:'honeyBoy',
    age :30,
    gender: 'Malew'
}


// console.log(ob1);
// console.log(ob1["gender"]);
// console.log(ob1[sym]);


ob1.age=22;
// Object.freeze(ob1); // frezzes the object , any changes won't be applied here
ob1.age=333;
// console.log(ob1);


ob1.surName="Kumar";
// console.log(ob1.surName);


ob1.logIn=function() {
    console.log("Welcome to the paradise");  
};

ob1.greeting=()=>console.log(`Hello Mr.${ob1.name} and you are ${ob1.age} years old`);

console.log(ob1.logIn());
console.log(ob1.greeting());

console.log(ob1);


