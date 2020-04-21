import React, { Component } from 'react';
//css
import './App.css';
//components
import Menu from './components/menu';
import Header from './components/Header';
import Gallery from './components/gallery/Gallery';


class App extends Component{
  
  state = {
    toggle : false
  }

  render(){ 
     return (
      <div className="App">
          <Menu/>
        <br/>
        <br/>
        <Header/>
        <br/>
        <br/> 
        <p  id="galeria">
        Galeria
        </p>       
        <Gallery/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;