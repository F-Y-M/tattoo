import React, { Component } from 'react';
//css
import './buttons/buttons.css';

export default class Button extends Component {


    render (){
        return(
            <button key={this.props.id} className="buttons">
                <a href={this.props.url}>
                    {this.props.nombre}
                </a>
            </button    >
        );
    }
}
