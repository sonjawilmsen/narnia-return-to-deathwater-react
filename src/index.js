import React from 'react';
import ReactDOM from 'react-dom';
// Import routing classes
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// Import own components
import App from './App';

// set up routes

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>                           // everything will be under the `App` component
      <IndexRoute component={HomePage} />                       // the `Welcome` component will be rendered on `/`
      <Route path="/sign-in" component={SignIn}/>          		 // the `Projects` component will be rendered on `/projects`
			<Route path="/sign-up" component={SignUp}/>
      <Route path="*" component={PageNotFound}/>               // all other routes will render `PageNotFound`
    </Route>
  </Router>
), document.getElementById('root'));
