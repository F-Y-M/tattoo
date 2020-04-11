import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const chatWidgetRoot = document.getElementById('chat-widget-root');

export default class Modal extends Component {
  state = { open: false };

  onClick = () => {
    this.setState({ open: !this.state.open });
    alert('esta vivo ');
  }
    
  render() {
    return ReactDOM.createPortal(this.renderWidget(), chatWidgetRoot);
  }
  renderWidget() {
    const overlay = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '70rem',
        height: '100rem',
        background: '#000',
        zIndex:'1001',
        opacity:'.55',
        filter: 'alpha(opacity=75)',
    }
    const modal = {
      display: 'none',
      position: 'absolute',
      top: '25%',
      left: '25%',
      width: '70rem',
      height: '100rem',
      padding: '16px',
      background: '#fff',
      color: '#333',
      zIndex:'1002',
      overflow: 'auto',
    }
    if (this.state.open){
      if(this.props.openClick){
        return (
          <>
              <a href="#" onClick={this.onClick}>{this.props.children}</a>
            { this.state.open && (
                <div style={overlay}>
                  <button onClick={this.onClick} style={{position:'abosolute',left:'0'}}>
                    x
                  </button>
                  <div className={modal}/>
                    <img src={this.props.img} alt="no hay" style={{width:'50rem',height:'80rem',opacity:'0'}}/>
                </div>
              )
            }
          </>
        );
      }
  }else{
    return(
    <>
    {this.props.children
        }
    </>);
  }
}
}