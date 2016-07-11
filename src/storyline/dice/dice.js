import React from 'react'
import Dicenumber from './dicenumber.js';

class Dice extends React.Component {

  render() {
    const style = {
      width: 70
    };

    return (
      <div>
        <button>
          <div>
            <img style={style} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2-Dice-Icon.svg/2000px-2-Dice-Icon.svg.png"/>
          </div>
        </button>
        <Dicenumber/>
      </div>
    );
  }
}

export default Dice;
