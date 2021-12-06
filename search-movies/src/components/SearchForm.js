import React, { Component } from 'react';

const API_KEY = '4287ad07'

export class SearchForm extends Component {
    // inicializamos el valor de esta propiedad en vacío
    state = {
        inputMovie: ''
    }

    // guardamos en nuevo valor de lo que se escribio en el input
    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    // evento cuando enviamos el dato del formulario
    _handleSubmit = (e) => {
        e.preventDefault()
        
        const {inputMovie} = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                const {Search = [], totalResults = "0"} = results
                this.props.onResults(Search)

                console.log({Search, totalResults})
            })
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            onChange={this._handleChange}
                            className="input" 
                            type="text" 
                            placeholder="Movie to search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}