import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Details from '../src/Details/details';
import Myratings from './Myratings/myRatings'

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} exact />
        <Route path="/details/:id/:name/:overview/:img" component={Details} />
        <Route path='/myratings' component={Myratings} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
