import React, {Component} from 'react';
import './characters.css'

import Formulario  from '../Formulario/Formulario'
import CharacterCard from '../CharacterCard/CharacterCard';

class Characters extends Component{
    constructor(props){
        super(props)
        this.state={
            personajes:[], //aparecer personajes
            nextUrl:'',
            value: ''
        }
    }

    componentDidMount(){
        //BUscamos datos
        fetch('https://rickandmortyapi.com/api/character')
            .then( res => res.json())
            .then( data => this.setState({
                personajes: data.results,
                nextUrl: data.info.next
            }))
            .catch()
    }
    
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                personajes: data.results.concat(this.state.personajes),
                nextUrl: data.info.next
            }))
            .catch()
    }

    borrar(id){
       let personajesFiltrados = this.state.personajes.filter(unPersonaje => unPersonaje.id !== id);
       this.setState({
        personajes: personajesFiltrados
       })
    }


    filtrarPersonajes(textoAFiltrar){
        
        let personajesFiltrados = this.state.personajes.filter((pj)=> pj.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
            
        this.setState({
            personajes: personajesFiltrados
        })

    }


    render(){
        console.log(this.state.personajes);
        return(
            <React.Fragment>
                <button onClick={()=> this.traerMas()}> Traer más </button>
                <section className='cardContainer'>
                    <Formulario prevent={(e)=>this.preventRecarga(e)} valor={this.state.value} guardar={(e)=>this.guardarCambios(e)} filtroPjs={(textoAFiltrar)=>this.filtrarPersonajes(textoAFiltrar)}/>
                    {
                        this.state.personajes.map((unPersonaje, idx) => <CharacterCard filtro={()=>this.filtrarPersonajes()} key={unPersonaje.name+idx} datosPersonaje={unPersonaje} borrar={(id)=>this.borrar()}/>)
                    }

                </section>
            </React.Fragment>
        )
    }

}


export default Characters