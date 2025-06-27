const user={
    name:"Ayush",
    price:333,

    welcome:function(){
        console.log(`Hello ${this.name}  how are you today and your price is ${this.price}` )
    }
}

// console.log(user.welcome());

function code(){
    userName="Aman";
    console.log(this.userName);
}

const Code=()=>{
    name="Aamar";
    console.log(this.name);
}
// code();
// Code();

const name =()=>{
    console.log("Ayush");
} // explicit method

const Name=()=>console.log("Ayush") // implicit method;
console.log(Name());



const obj=()=>( {name :"Ayush"}); // () is used to return an object literal in arrow function syntax


console.log(obj());
