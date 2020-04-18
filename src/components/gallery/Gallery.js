import React, { Component } from 'react';
//components
import Modal from '../Modal';
// imagenes 
import imgs from './imgs';
// css
import './Gallery.css';


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
       <a href="#">
        <div className="root" name="galeria">
          {imgs.map((img) => (
              <div key={img.index} >
              <a href="#" style={{cursor:'pointer'}} onClick={this.onClick}>
                <img src={img.img} className="gridList" alt="no hay"/>
              </a>
              </div>
          ))}
          {this.state.open 
              ? <Modal img={imgs} target={this.state.target} open={this.state.open}/> : '' }
        </div>
        </a>
    );
  }
}

