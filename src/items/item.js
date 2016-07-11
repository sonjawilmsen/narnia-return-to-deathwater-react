import React from 'react';
import {Card, CardMedia, CardHeader} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'https://s-media-cache-ak0.pinimg.com/236x/79/e0/a2/79e0a2b6d9f2bb11179c094835aa1e64.jpg',
    title: 'Boots of the falcon',
    description: '+1 trickery',
  },
  {
    img: 'http://vignette2.wikia.nocookie.net/lotr/images/8/88/2257-Aragorn-Costume-Sword-large.jpg/revision/latest?cb=20150418090815',
    title: 'Excalibur',
    description: '+1 fighting',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41ZwQ3LQKYL.jpg',
    title: 'Helm of the stuff',
    description: '+1 armour',
  },
  {
    img: 'http://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/pontiff_knight_leggings.png',
    title: 'Legs of the stuff',
    description: '+1 armour',
  },
];

class Items extends React.Component {

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          style={styles.gridList}
          >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span><b>{tile.description}</b></span>}
            >
            <img src={tile.img} />
          </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Items;
