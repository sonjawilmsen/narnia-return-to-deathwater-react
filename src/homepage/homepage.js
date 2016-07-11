import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';

class HomePage extends React.Component {

  render() {
    return (
      <div>
				<h1> HomePage </h1>
				<Link to='/sign-in'><FlatButton label="Sign In" /></Link>
				<Link to='/sign-up'><FlatButton label="Sign Up" /></Link>
      </div>
    );
  }
}

export default HomePage;
