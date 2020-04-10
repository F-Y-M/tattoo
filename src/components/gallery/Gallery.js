import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//components

// imagenes 
import imgs from './imgs';

const chatWidgetRoot = document.getElementById('chat-widget-root');

const useStyles ={
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  gridList: {
    width: 1500,
    height: 450,
  },
}

export default class ImageGridList extends Component {
  state = {
    toggle:false
  };

  openClick = () => this.setState({toggle:true});

  closeClick = () => this.setState({toggle:false});

  render(){
     return (
      <div style={useStyles.root}>
        <GridList cellHeight={100} style={useStyles.gridList} cols={8}>
          {imgs.map((img) => (
            <Modal openClick={this.openClick} img={img.img}>
              <GridListTile key={img.index} cols={img.cols || 1} rows={img.rows}>
                  <img src={img.img} />
              </GridListTile>
            </Modal>
          ))}
        </GridList>
      </div>
    );
  }
}

  class Modal extends Component{
    dialog(){
      return (
        <>
        { this.props.openClick && (
          <div className="chat__window">
            <header className="chat__header">
              <h3 className="chat__title">Live support</h3>
              <button className="chat__close-button" onClick={this.handleCloseButtonClick}>
                <img src={this.props.img} alt=""/>
              </button>
            </header>
            <div className="chat__messages"/>
            <textarea className="chat__message-input" placeholder="Type your message here"/>
          </div>
        )
      }
    </>

      );
    }
    render(){
      return ReactDOM.createPortal(this.dialog(),chatWidgetRoot);
    }
  }
