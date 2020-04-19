import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component{

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState(() => { return {open: nextProps.open} })
    }
    if (nextProps.img !== this.state.img){
      this.setState(() =>{return{img : {...nextProps.img}}})
    }
    if ( nextProps.target !== this.state.target){
      this.setState(()=>{return{target : nextProps.target}})
    }
  }

  state = {
    open: false
  }

  onclick = () => {
    this.setState({open:false})
  }

  render(){
    const modal ={
      display: this.state.open ? 'block' : 'none',
    }
    return(
      <div>
          <div id="myModal" style={modal} className="modal">
            <div className='flex' id="flex">
              <center>
                <div className="contenidoModal">
                    <div className='modal-header' >
                        <span className="close" id="close" onClick={this.onclick}>
                            &times;
                        </span>
                    </div>
                    <img src={this.state.target} alt=""/>
                    <div className='footer'>
                        <h3>hecho por &copy; juan quiñones </h3>
                    </div>
                </div>
              </center>
            </div>
          </div>
      </div>
    );
  }
}