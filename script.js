const startButton = document.getElementById("startButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

window.alert("hey");

let stopwatchInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let time = document.querySelector(".stopwatchDisplay");
time.innerHTML = `${hours} : ${minutes} : ${seconds}`;

startButton.addEventListener("click", start)
pauseButton.addEventListener("click", )
resetButton.addEventListener("click", )

function updateStopwatch (){
  seconds++
  if (seconds === 60) {
    seconds = 0;
    minutes++
  }
  if (minutes === 60) {
    minutes = 0;
    hours++
  }
}
console.log("hey")


function start(){
  stopwatchInterval = setInterval(updateStopwatch,10);
  console.log("Starting stopwatch")
}

function pause() {
  clearInterval(stopwatchInterval);
}

function reset() {
  clearInterval(stopwatchInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  time.innerText = "00:00:00";
}

let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

time.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

