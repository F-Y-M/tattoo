import React from 'react';
//css
import './App.css';
//components
import Menu from './components/menu';
import Gallery from './components/gallery/Gallery';
// import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Menu/>
      </div>
      <Gallery/>
      <br/>
      <br/>
    </div>
  );
}

export default App;