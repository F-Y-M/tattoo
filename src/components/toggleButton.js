import React, { Component } from 'react';
//css
import './toggleButton.css';

export default class ToggleButton extends Component {
 
    state = {
        open : false,
        toggle : true
    }

    onClick = () =>{
        this.setState({open: !this.state.open,toggle: !this.state.toggle})
        console.log(this.state)
    }

    render(){

        return(
            <button className="btn" style={this.state.toggle ? close : open } onClick={this.onClick}> 
                <Svg toggle={this.state.toggle}/>
            </button>

        );
    }
}

const open = { 
    float:'right',
    background: 'red'
}

const close = {
    float:'left'
}
class Svg extends Component{

    static getDerivedStateFromProps(nextProps, state) {
        return nextProps.toggle === state.toggle
          ? {}
          : {toggle: nextProps.toggle}
      }

 state ={
     toggle: this.props.toggle
 }   
render(){
    console.log(this.props)
    return(
        
        this.state.toggle
        ? <svg aria-hidden='true'focusable='false'data-prefix='fas' data-icon='bars'class='svg-inline--fa fa-bars fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg'viewBox='0 0 448 512'><path fill='currentColor'd='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>

    );
}
}