import React, { Component } from 'react';
import ToggleButton from './toggleButton';
// css
import './menu.css'
class Menu extends Component{
  state ={
      toggle : true
  }

  toggleMenu = () =>{
    if (this.state.toggle === true) {
        return menu;
    }else{
        return null;
    }
  }

    render(){
        return(
            <div className="nav">
                <ToggleButton/>
                {this.toggleMenu} 
            </div>
        );
    }
}

const menu = 
    <ul className="menu" >
    <li className="elemento">
        <p>
            <a href="#home">
                home
            </a>
        </p>
    </li>
    <li className="elemento">
        <p>
            <a href="#galeria">
                galeria
            </a>
        </p>
    </li>
    <li className="elemento">
        <p>
            <a href="#citas">
                citas
            </a>
        </p>
    </li>
    <li className="elemento">
        <p>
            <a href="#conocenos" className="contact">
                conocenos
            </a>
        </p>
    </li>
    <li className="contact">
        <span>
            +57 3118623161
        </span>    
    </li>
    </ul>
;

export default Menu;