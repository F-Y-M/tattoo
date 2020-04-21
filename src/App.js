import React, { Component } from 'react';
//css
import './App.css';
//components
import Menu from './components/menu';
import Header from './components/Header';
import Gallery from './components/gallery/Gallery';
import Citas from './components/citas';


class App extends Component{
  
  state = {
    toggle : false
  }

  render(){ 
     return (
      <div className="App">
          <Menu/>
        <br/>
        <Header/>
        <br/>
        <br/> 
        <p  id="galeria" className="app">
        Galeria
        </p>       
        <Gallery/>
        <br/>
        <br/>
        <p id="citas" className="app">
          Citas
        </p>
        <Citas/>
      </div>
    );
  }
}

export default App;