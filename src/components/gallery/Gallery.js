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
    open: false,
    target: null,
    img: undefined
  };

  onClick = (e)=>{
    this.setState({open:true,target:e.target.src});
  }

  closeClick = () => this.setState({open:false});

  render(){
     return (
      <div style={useStyles.root}>
        {imgs.map((img) => (
            <div key={img.index} >
            <a href="#" style={{cursor:'pointer'}} onClick={this.onClick}>
              <img src={img.img} style={useStyles.gridList}/>
            </a>
            </div>
        ))}
        {this.state.open 
            ? <Modal img={imgs} target={this.state.target} open={this.state.open}/> : '' }
      </div>
    );
  }
}

