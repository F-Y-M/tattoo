import React, { Component } from 'react';
// css
import './menu.css'
class Menu extends Component{
  
    render(){
        return(
            <ul className="menu">
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
                        <a href="#conocenos">
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
        );
    }
}
export default Menu;