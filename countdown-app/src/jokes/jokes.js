import React from 'react';
import './jokes.css'
import { Link } from 'react-router-dom';

export default class Jokes extends React.Component{
    constructor(){
        super();
        console.warn("constructor");
    }

    componentDidMount() {
    }
    render() {
        return (<Timer/>)

    } 
}

function countdown() {

    // const daysEl = document.getElementById("days");
   
}


  function Timer(){
            return (
                <div class="countdown-container">
        
                <div class="countdown-el days-c">
                    <p class="big-text" id="days">0</p>
                    <span>Jokes</span>
                </div>
                
                <Link to="/"><button>
              Go to Home
            </button>
            </Link>
                </div>
            )
        
}