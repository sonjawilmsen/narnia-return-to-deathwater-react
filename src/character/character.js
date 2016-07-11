import React from 'react';

//comonents
import Skills from './skills.js';

//styling
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const style = {margin: 5};

class Character extends React.Component {
    render() {
        return (
            <div>
              <list>
                <ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="https://avatars2.githubusercontent.com/u/309331?v=3&s=400" />
                  }
                  >
                  Foxyfighter
                </ListItem>
              </list>
              <Skills/>
            </div>
        );
    }
}

export default Character;
