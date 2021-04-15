// 'open html with live image -- plugin?
// any other plugins he downloads at the start?

function coundown() {

    const newYears = '';
}



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


var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 30;

function myTimer() {
if(secondlimit == 0)
{
    myStopFunction();
}

document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
secondlimit = secondlimit  - 1;

}

function myStopFunction() {
    clearInterval(myVar);
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}