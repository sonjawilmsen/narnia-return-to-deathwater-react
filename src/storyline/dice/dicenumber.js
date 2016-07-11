import React from 'react';

class Dicenumber extends React.Component {

  render() {
    const style = {
      width: 82
    };

    return (
      <div>
        <input style={style} type="text"
        value={this.state}
        onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Dicenumber;
