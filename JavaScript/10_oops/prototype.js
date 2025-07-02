
const arr=hero=['ironman','captain ameria']

let heroPower={
    thor:'hammer',
    spider:'sling',


    getSpidyPower:function(){
        console.log(this.spider);
    }
}

// if we want our custom functions to be injected then we can use:: Type.prototype.method use can add custom methods from these;

Object.prototype.Ayush=()=>{   // this can create multiple methods if we want to , methods created at object level are available to all the things in javaScript
    console.log("Ayush is invincible"); 
}

Array.prototype.Takla=()=>{
    console.log("I am a aarray");
    
}

heroPower.Ayush();
arr.Takla();

// heroPower.Takla();



// inheritence

const user={
    name:"Ayush",
    lastName:"Kumar"
}

const forWork={
    isAvailable:true
}

const readyForWork={
    isReady:true,
    __proto__:forWork
}

console.log(readyForWork.__proto__.isAvailable);

//new Syntax

Object.setPrototypeOf(forWork,user);


let str="Ayush       ";

String.prototype.trueLength=function(){  // arrow function will create problem sometime;

   const val= this.trim();
    console.log(`True length is ${val.length}`);
}

str.trueLength()
