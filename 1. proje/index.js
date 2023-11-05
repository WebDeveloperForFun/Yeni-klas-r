let clock = document.getElementById("clock");
let time = document.getElementById("time");
let buttons = document.getElementById("buttons");
let start = document.getElementById("start");
let restart = document.getElementById("restart");
let stoper = document.getElementById("stop");
let date1;
let ElaspedTime = 0;
let IntervalId;

start.addEventListener("click", () => {
    date1 = Date.now() - ElaspedTime;
    IntervalId = setInterval(timer, 75);
});

restart.addEventListener("click", () => {
    clearInterval(IntervalId); // Zamanlayıcıyı temizle
    ElaspedTime = 0;
    time.textContent = "00:00:00"; // Saat, dakika ve saniyeyi sıfırla
});

stoper.addEventListener("click", () => {
    if (IntervalId) {
        clearInterval(IntervalId); // Zamanlayıcıyı durdur
        IntervalId = null; // IntervalId'yi null olarak ayarla
    } 
});

function timer() {
    ElaspedTime = Date.now() - date1;
    let sec = Math.floor((ElaspedTime / 1000) % 60);
    let mins = Math.floor((ElaspedTime / (1000 * 60)) % 60);
    let hours = Math.floor((ElaspedTime / (1000 * 60 * 60)) % 60);
    sec = path(sec);
    mins = path(mins);
    hours = path(hours);
    time.textContent = `${hours}:${mins}:${sec}`;
}

function path(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit 

}