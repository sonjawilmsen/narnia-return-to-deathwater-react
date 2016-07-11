import React from 'react';
import Items from './item.js';

class ItemView extends React.Component {

  render() {
    return (
      <div>
				<h1>Your inventory</h1>
				<Items />
      </div>
    );
  }
}

export default ItemView;
