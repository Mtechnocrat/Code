const form = document.querySelector("form");
const lowHi=document.querySelector(".lowOrHi");
const userInput=document.querySelector("#guessField");
const btn=document.querySelector("#subt");
// const guessText=document.querySelector("#guess")

let prevGuess=[];
const min=1;
const max=100;
let actualNumber=Math.floor(Math.random()*(max-min)+1)+min;
const remGuess=document.querySelector(".lastResult");
remGuess.innerHTML=10;

console.log(actualNumber);

let count=10;


btn.addEventListener("click",(event)=> {
    event.preventDefault();
    const guess = parseInt(userInput.value);

    // validate(guess);
   
    // if (validate) ? prevGuess.push(guess):continue;
    prevGuess.push(guess)
    userInput.value=''
    const history=document.querySelector(".guesses");
    history.innerHTML=`[${prevGuess}]`;

    if(guess>actualNumber){
        lowHi.innerHTML=`The number is lower than this`;
    }
    if(guess<actualNumber){
        lowHi.innerHTML=`The number is Higher than this`;
    }
    
    if(guess==actualNumber){
        userInput.setAttribute('disable','');
        winnerFunction();
    }
    let chances=count-prevGuess.length
    remGuess.innerHTML=chances;

    if(chances==0){
        loserFunction();
    }
  
});

const winnerFunction=()=>{
    remove();
    results("Won"); 
    addButton();
}
const loserFunction=()=>{
    remove();
    results("lost");
    addButton();
}

const addButton=()=>{
    const button=document.createElement('button');
    button.innerText="Start over";
    form.appendChild(button);

    prevGuess=[];
    count=10;
     actualNumber=Math.floor(Math.random()*(max-min)+1)+min;
}
const results=(e)=>{
        const ele=document.createElement('span');
        ele.innerHTML=`You ${e} the game the number is ${actualNumber}`;
        form.appendChild(ele); 
}

const remove=()=>{
    const res=document.querySelector("#subt");
    res.remove();
}

// const validate=(guess)=>{
//     if(isNaN(guess)){
//         display("Not a Number");
//     }else if(guess<0){
//         display("Enter postive number");
//     }else if(guess>100){
//         display("Enter below 100");
//     }else{
//         return true;
//     }
// }

// const display=(state)=>{
//     guessText.innerHTML=`${state}`
// }