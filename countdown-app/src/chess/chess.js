import React from 'react';
import './chess.css'
import { Link  } from 'react-router-dom';

export default class Chess extends React.Component{
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
   
}


  function Timer(){
            return (
                <div class="countdown-container">
        
                <div class="countdown-el days-c">
                    <p class="big-text" id="days">0</p>
                    <span>days</span>
                </div>
                
                <Link to="/"><button>
              Go to Home
            </button>
            </Link>
                </div>
            )
        
}