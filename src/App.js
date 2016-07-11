import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Character from './character/character.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class App extends React.Component {
    render() {
        return (
          <MuiThemeProvider>
            <Character/>
          </MuiThemeProvider>
        );
    }
}

export default App;
