function sayMyName(){
    console.log("Alex");
}

// sayMyName; // This will not execute the function, it just references it
// sayMyName(); // This will execute the function and print "Alex"

function addNumbers(num1 , num2){
    // console.log(num1+num2);
}

function addNum(num1,num2){
    let res=num1+num2;
    return res;
}

const result =addNumbers(1,6); //gives result non-defined if we try to print the object
// console.log(result);


const res=addNum(10,5);// this will give the value of as there is return type
// console.log(res);

function sayMyNameAgain(name="Ayush"){  // it will automatically fill the placeholder if nothing is passed there  , hence undefined is not returned in the console;
    return `${name} is your name`
}

// console.log(sayMyNameAgain("Kumar"));

function cartPrice(price){  // this is only print the first value given in argumert
    return price;
}
// console.log(cartPrice(200,300,400)); 

function cartPricesAll(...price){  // this is rest operator , when used in functions called rest operatore and when it is used with array is called spread operator.
    return price;
} // all the arguments that is now passed in the function will be get into an array and it will get return as array

// console.log(cartPricesAll(1000,333,4456,2333));

const object={
    name:"PS5",
    price:40000
}

function price(anyObject){
    console.log(`The price of ${anyObject.name} is ${anyObject.price}`);
}

price(object);





