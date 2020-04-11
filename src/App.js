import React, { Component } from 'react';
//css
import './App.css';
//components
import Menu from './components/menu';
import Gallery from './components/gallery/Gallery';
import Modal from './components/Modal';


class App extends Component{
  
  state = {
    toggle : false
  }

  // onClick(e){
  // alert('funciona');
  // }

  render(){ 
     return (
      <div className="App">
        <div className="menu">
          <Menu/>
        </div>
        <Gallery/>
        <br/>
        <br/>
        {/* <Modal>
          <a href="#" onClick={this.onClick}>
            <img src="/gallery/img/img1.jpg" alt="no hay"/>
          </a>
        </Modal> */}
      </div>
    );
  }
}

export default App;