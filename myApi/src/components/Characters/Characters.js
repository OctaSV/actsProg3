import React, { Component } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard';
import './Characters.css'

class Characters extends Component{
    constructor(){
        super()
        this.state = {
            infoData: []
        }
    }

    componentDidMount(){
        
        console.log('hola');
        fetch('https://rickandmortyapi.com/api/character')
        .then((json_txt) => {
            return json_txt.json()
        })
        .then((json_obj) => {
            this.setState({
                infoData: json_obj.results
            })
        }).catch((err) => {
            console.log('El error es' + err);
        });
    }


    render(){
        return(
            <section className='cardContainer'>
                {
                    this.state.infoData === ''
                    ? <h3>Cargando...</h3>
                    : this.state.infoData.map((info) => <CharacterCard img={info.image} name={info.name} status={info.status} species={info.species} origin={info.origin.name}/>)
                }
            </section>
        )
    }

}


export default Characters;