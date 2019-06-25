import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

import * as serviceWorker from './serviceWorker';

const app = (
    <Router basename='/NGO-Project'>
        <div>
            <Route exact path="/" component = {Home} />
            <Route exact path="/about" component = {About} />
            <Route exact path="/contact" component = {Contact} />
        </div>
    </Router>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
