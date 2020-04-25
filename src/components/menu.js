import React, { Component } from 'react';
import ToggleButton from './toggleButton';
// css
import './menu.css'
class Menu extends Component{

  state ={
      toggle : true
  }
   
  boton = () =>{
      this.setState({toggle: !this.state.toggle})
  }

    render(){
        
        return(
            <div className="nav">
                <ToggleButton toggle={this.state.toggle} onClick={this.boton}/>
                {this.state.toggle 
                ? <ul className="menu">
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
            : null }
            </div>
        );
    }
}

export default Menu;