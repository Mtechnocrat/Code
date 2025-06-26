const obj=new Object();
// console.log(obj);

obj.name="Russle";
obj.age=30;
obj.gender="male";

// console.log(obj);

const addtionalInfo={
    fullName:{
        username:{
            firstName:"Ravi",
            lastName:"kishore"
        },
        dummyName:{
            firstName:"Rahul",
            lastName:"Dravid"
        }
    },
    age:40,
    email:"singh@gmail.com"
}

addtionalInfo.fullName.dummyName.firstName="Virat"; //



// console.log(addtionalInfo);

const numAlpha={1:'a',2:'b',3:'c'};

const obj3={addtionalInfo,numAlpha} // Creating an object that contains other objects 
// console.log(obj3);// { addtionalInfo: { fullName: { username: [Object], dummyName: [Object] }, age: 40, email: '


const obj4=Object.assign({},addtionalInfo,obj) //mergers two object into one  
// if we don't pass the first parameter as an empty object, it will merge the properties into the original object i.e addtionalInfo will get elements of obj.

// console.log(obj4);


const obj5={...numAlpha,...obj} // Spread operator to merge two objects
// console.log(obj5);


// console.log(Object.keys(addtionalInfo)); // Returns an array of keys of the object
// console.log(Object.values(addtionalInfo)); // Returns an array of values of the object
// console.log(Object.values(addtionalInfo.fullName)); // Returns an array of values of the object

// console.log(Object.entries(addtionalInfo)); // Returns an array of key-value pairs of the object, the first element of each pair is the key and the second element is the value



// console.log(Object.hasOwnProperty(addtionalInfo,"nameKey")); // returns true if the object has the specified property, otherwise false



const Student={
    name:"Rakesh",
    lastName:"Sharma",
    occuption:"Bewda"
}


const {lastName} = Student; // Destructuring the lastName property from the Student object means // we are extracting the lastName property from the Student object and assigning it to a variable named lastName
// console.log(lastName);

const {lastName:ln} =Student;//Destructuring the lastName property from the Student object and assigning it to a variable named ln or assigning it to a variable with a different name
console.log(ln); // This will print the value of lastName property from the Student

