const promiseOne=new Promise(function(resolve,reject){ //function that takes two arguments: resolve and reject
        // can do some asynchronous operation here
        // Db call, API call, etc.
        setTimeout(function(){
            console.log("My name is Ayush");
             resolve(); /// keyword is used to connect .then to the resolve
        },1000);


})

promiseOne.then(function(){  // .then have direct connections with resolve , the parameter of callback functions are the all the values evaluated in the promise block;
    console.log("Promise is consumed"); 
})

// method 2

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Functions is here");
        resolve();  
    },1000)
}).then(function(){
    console.log("Promise has been consumed");
})


//promise 3

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Testing part 3");
        resolve({name:"Kishore",age:42});  // data can be passed through the resolve to the .then() method 
    },1000);
});

promiseThree.then((data)=>{
    console.log(data);
})


//promise 4
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let eror=true;

        if(!eror){
            resolve({name:"Ayush",age:22});
        }else{
            reject('Error !! something went wrong');
        }
    },1000)
})


promiseFour.then((data)=>{  //chainable promise
    console.log(data);
    return data.name;
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{console.log("The promise is either fulfilleda or rejected");})  // finialy keywords are always executed in the javaScript


//promise 5
//async method
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;

        if(!error){
            resolve({name:"Rahul",age:32});
        }else{
            reject('Error !! JS went wrong');
        } 
    },1000)
})



async function consumingFive(){  //async function is used to consume the promise , it just works like .then() method but it is more readable and easy to understand
    try {
        const response= await promiseFive;  // await keyword is used to wait for the promise to be resolved or rejected
        console.log("Promise 5 is consumed");
        console.log(response);
    } catch (error) {   // error is handled gracefully
        console.log(error);
        
    }
}

console.log(promiseFive);
consumingFive();


// promise 6

// async function collectData(){
//     try {
//     const response=await fetch('https://jsonplaceholder.org/users');// return values in promises
//     // fetch is used to make a network request to the specified URL, it returns a promise

//     console.log(response);
    
//     // const data=await response.json();  // .json() method is used to parse the promise response data into JSON format
//     // console.log(data);
//     } catch (error) {
//         console.log(error);  // error is handled gracefully
//     }
// }

// collectData();


// using .then();


fetch('https://jsonplaceholder.org/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
    
});