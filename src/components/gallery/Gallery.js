import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
//components
import Modal from '../Modal';
// imagenes 
import imgs from './imgs';


const useStyles ={
  root: {
    width: '1500',
    height: '450',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  gridList: {
    height:'10rem',
    width:'8rem',
    borderRAdius:'50px'
  },
}

export default class ImageGridList extends Component {
  state = {
    open:false
  };

  openClick = () => {
  this.setState({open:true})
  return (this.state);
  }

  alert = ()=>alert('galeria')

  closeClick = () => this.setState({open:false});

  render(){
     return (
      <div style={useStyles.root}>
        {imgs.map((img) => (
            <div key={img.index} >
          <Modal img={img.img} openClick={this.openClick}>
            <a href="#" style={{cursor:'pointer'}} onClick={this.alert}>
              <img src={img.img} style={useStyles.gridList}/>
            </a>
          </Modal>     
            </div>
        ))}
          {/* <GridList cellHeight={100} style={useStyles.gridList} cols={8}>
            {imgs.map((img) => (
                <GridListTile key={img.index} cols={img.cols || 1} rows={img.rows}>
                    <img src={img.img}/>
                </GridListTile>
            ))}
          </GridList> */}
      </div>
    );
  }
}

