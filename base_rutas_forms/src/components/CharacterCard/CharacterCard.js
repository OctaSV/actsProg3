import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css'
class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <article className='character-card'>
                    <Link to={'/personajes/id/' + this.props.datosPersonaje.id}>
                    <img src={this.props.datosPersonaje.image} alt="" />
                    <h2>{this.props.datosPersonaje.name}</h2> {/* Nombre */}
                    <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
                    <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
                    <p className='more'>Ver más</p> 
                    <section className='extra'>
                        <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                    </section>
                    <p className='delete' onClick={()=>this.props.borrar(this.props.datosPersonaje.id)}>Borrar</p>
                    </Link>
                </article>
        )
    }

}

export default CharacterCard