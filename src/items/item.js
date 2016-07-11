import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

class ItemCard extends React.Component {

	const styles = {

	}

  render() {
    return (
			<Card>
				<CardMedia>
					<img src="https://s-media-cache-ak0.pinimg.com/236x/79/e0/a2/79e0a2b6d9f2bb11179c094835aa1e64.jpg" />
				</CardMedia>
				<CardTitle title="Magic Boots"/>
			</Card>
    );
  }
}

export default ItemCard;
