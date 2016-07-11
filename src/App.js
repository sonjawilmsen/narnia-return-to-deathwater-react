import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;
