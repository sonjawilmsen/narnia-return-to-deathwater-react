import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ItemView from './items/itemview.js';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>Return to Death water!</h1>
          <ItemView />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
