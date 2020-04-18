import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//components
import Modal from '../SimpleModal';
// imagenes 
import imgs from './img';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1500,
    height: 450,
  },
}));

export default function ImageGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={100} className={classes.gridList} cols={8}>
          {imgs.map((img) => (
              <GridListTile key={img.index} cols={img.cols || 1} rows={img.rows}>
                <Modal img={img.img}>
                  <img src={img.img} />
                </Modal>
              </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }