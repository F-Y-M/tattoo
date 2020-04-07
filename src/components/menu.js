import React, { Component } from 'react';
//components
import Button from './Button';
// archivos .json
import sitios from './samples/sitios.json';

class Menu extends Component{
  
    state = {
        show : true,
        sitios : sitios
    }

    toggle = () =>{
    this.setState({show : !this.state.show});
    console.log(this.state.show)
    }

    render(){
        if (this.state.show){
            return(
                this.state.sitios.map(sitio =>
                    <Button 
                    key={sitio.id}
                    nombre={sitio.nombre} 
                    url={sitio.url}/> 
                )
            );
        }else{
            return (
                <div>
                    no hay elementos
                </div>
            );
        }
    }
}
export default Menu;