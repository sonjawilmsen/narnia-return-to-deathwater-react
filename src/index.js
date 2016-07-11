import React from 'react';
import ReactDOM from 'react-dom';
// Import routing classes
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// Import own components
import App from './App';
import HomePage from './homepage/homepage.js';
import SignIn from './homepage/sign-in.js';
import SignUp from './homepage/sign-up.js';

// set up routes

ReactDOM.render((
  <Router history={browserHistory}>
	  <Route path="/" component={App}>
		  <IndexRoute component={HomePage} />
			<Route path="/sign-in" component={SignIn}/>
			<Route path="/sign-up" component={SignUp}/>
		</Route>
  </Router>
), document.getElementById('root'));
