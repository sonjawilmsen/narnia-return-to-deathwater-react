import React from 'react';
import ReactDOM from 'react-dom';
// Import routing classes
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// Import own components
import App from './App';
import HomePage from './homepage/homepage.js';
import SignIn from './homepage/sign-in.js';
import SignUp from './homepage/sign-in.js';

// set up routes

ReactDOM.render((
  <Router history={browserHistory}>
	  <Route path="/app" component={App} />
		<Route path="/" component={HomePage} />
		  <IndexRoute component={HomePage} />
		<Route path="/sign-in" component={SignIn}/>
		<Route path="/sign-up" component={SignUp}/>
  </Router>
), document.getElementById('root'));
