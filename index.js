let clock = document.getElementById("clock");
let  time = document.getElementById("time");
let  buttons = document.getElementById("buttons");
let start = document.getElementById("start");
let restart = document.getElementById("restart");
let stop = document.getElementById("stop");
let date = Date.now();
let ElaspedTime = 0;

start.addEventListener("click" , ()=>{

    let date1 = date - ElaspedTime;
    let ElaspedTime = date - date1
    setInterval(function() {
        console.log((ElaspedTime/1000) %60 );
    
    }, 1000);
    
})
stop.addEventListener("click" , ()=>{
    
})
restart.addEventListener("click" , ()=>{
    
})