import React, { Component } from 'react'

class Formulario extends Component{
    
    constructor(props){
        super(props)
        this.state={
            personajes:[],
            value: ''
        }
    }


    preventRecarga(e){

        e.preventDefault();

    }

    guardarCambios(e){

        this.setState({value: e.target.value}, ()=> this.props.filtroPjs(this.state.value));


    }

    render(){
        return(
                <React.Fragment>
                    <form onSubmit={(e)=>this.preventRecarga(e)}>
                        <input placeholder='Name' type='text' onChange={(e)=>this.guardarCambios(e)} value={this.state.value}/>
                        <input type='submit' value='Submit'/>
                    </form>
                </React.Fragment>
                
        )
    }
}

export default Formulario;