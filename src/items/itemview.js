import React from 'react';
import ItemCard from './item.js';

class ItemView extends React.Component {

  render() {
    return (
      <div>
				<h1>Items</h1>
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
      </div>
    );
  }
}

export default ItemView;
