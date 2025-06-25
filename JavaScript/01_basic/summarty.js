let name="Ravi";
let secondName="kishore";



console.log(name, secondName);



const user ={
    name: "John",
    email:"john@mail.com"
}

const user2=user;

user2.name="Ravi";


console.table([user.name,user2.name]);
// This will show that both user and user2 refer to the same object in memory
// Output:  John   John // This is because objects are reference types in JavaScript
// If you want to create a copy of the object, you can use Object.assign or the spread operator

