const randomColor=()=>{
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(randomColor());

const start=document.getElementById('start');
const stop=document.getElementById('stop');
const body=document.querySelector('body');

const changeColor=()=>{
    body.style.backgroundColor=randomColor();
}
let change

start.addEventListener('click',()=>{
    change=setInterval(changeColor,1000);
});

stop.addEventListener('click',function(){
    clearInterval(change);
    console.log("clicked");
});
