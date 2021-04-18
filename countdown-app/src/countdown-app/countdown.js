import React from 'react';
import './countdown.css'
import {  Link  } from 'react-router-dom';

export default class CountdownClass extends React.Component{
    constructor(){
        super();
        console.warn("constructor");
    }

    componentDidMount() {
        countdown();
    }
    render() {
        return (<Timer/>)

    } 
}

function countdown() {

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    
    const newYears = "1 Jan 2022";

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds1 = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds1);


// setInterval(countdown, 1000);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

  function Timer(){
            return (
                <div class="countdown-container">
        
                <div class="countdown-el days-c">
                    <p class="big-text" id="days">0</p>
                    <span>days</span>
                </div>
                <div class="countdown-el hours-c">
                    <p class="big-text" id="hours">0</p>
                    <span>hours</span>
                </div>
                <div class="countdown-el minutes-c">
                    <p class="big-text" id="minutes">0</p>
                    <span>minutes</span>
                </div>
                <div class="countdown-el seconds-c">
                    <p class="big-text" id="seconds">0</p>
                    <span>seconds</span>
                </div>
                
                <Link to="/"><button>
              Go to Home
            </button>
            </Link>
                </div>
            )
        
}


