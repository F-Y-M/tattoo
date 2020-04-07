import React, { Component } from 'react';

export default class FloatButton extends Component{
    state = {
        toggle : true,
    }
    menu = () =>{

    }
    render(){
        return(
            <div>
                <button onClick={this.menu} state={this.state}>
                  x  
                </button>
                <p id='click'>

                </p>
            </div>
        );
    }
}