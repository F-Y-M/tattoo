import React from 'react';
//css
import './App.css';
//components
import FloatButton from './components/FloatButton';
import Menu from './components/menu';
import Gallery from './components/gallery/Gallery';
import Modal from './components/SimpleModal';

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Menu/>
      </div>
      <Gallery/>
      <br/>
      <br/>
      <Modal/>
    </div>
  );
}

export default App;
