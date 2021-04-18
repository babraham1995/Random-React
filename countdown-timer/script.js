// 'open html with live image -- plugin?
// any other plugins he downloads at the start?

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = new Date(newYearsDate - currentDate);

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds1 = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds1);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000);

// function time(){

//     const time = new Date('now');
//     document.getElementById('time-span').setAttribute(time);

//     var sec = 30;
//     var timer = setInterval(function(){
//         document.getElementById('timer').innerHTML='00:'+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);


// }


// var myVar = setInterval(function(){ myTimer() }, 1000);
// var secondlimit = 30;

// function myTimer() {
// if(secondlimit == 0)
// {
//     myStopFunction();
// }

// document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
// secondlimit = secondlimit  - 1;

// }

// function myStopFunction() {
//     clearInterval(myVar);
// }

// function zeroPad(num, places) {
//   var zero = places - num.toString().length + 1;
//   return Array(+(zero > 0 && zero)).join("0") + num;
// }