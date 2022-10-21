import React, { Component } from "react";
import './CharacterCard.css'


class CharacterCard extends Component() {
    constructor(props){
        super(props);
        this.state = {}
    }

    verMenos(){
        
    }

    verMas(){
        let extra = document.querySelector('extra')
        extra.style.setProperty('show')
    }

    render(){
        return(
            <article className='character-card'>
                <img src={this.props.img} alt="avatarIMG" />
                <h2>{this.props.name}</h2>
                <p>{this.props.status}</p>
                <p>{this.props.species}</p> 
                <button onClick={() => this.verMas()} className='more'>Ver más</button> 
                <section className='extra'>
                    <p>Origen: {this.props.origin}</p>
                </section>
                <button className='delete'>Borrar</button>
            </article>
        )
    }
}

export default CharacterCard;