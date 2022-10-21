import React, { Component } from "react";

class OneCharacter extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            personaje: {}
        }
    }

    componentDidMount(){
        //BUscamos datos
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
            .then( res => res.json())
            .then( data => this.setState({
                personaje: data
            }))
            .catch(err => console.error(err))
    }


    render(){
        let infoPj = this.state.personaje
        console.log(infoPj.image);
        return(
             
                    <React.Fragment>
                        <img src={infoPj.image} alt='pjImg'/>
                        <h2>{infoPj.name}</h2> 
                        <h3>{infoPj.status}</h3>
                        <h3>{infoPj.gender}</h3>
                    </React.Fragment>
            

        )
    }

}

export default OneCharacter;