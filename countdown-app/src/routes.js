import React from 'react';
import CountdownClass from './countdown-app/countdown';
import Jokes from './jokes/jokes';
import App from './App'
import {BrowserRouter as Router, Route } from 'react-router-dom';

const CreateRoutes = () => (
    <Router >
      <Route exact path="/" component={App}/>
      <Route exact path="/countdown" component={CountdownClass}/>
      <Route exact path="/jokes" component={Jokes}/>
    </Router>
);

export default CreateRoutes;




