import React, { Component } from 'react';

export default class Forms extends Component {
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        const name = this.inputName.value; // forma de obtener el valor del input mediante referencias del DOM
        const twitter = document.querySelector('#twitter').value;

        console.log({name, twitter});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        console.log(e.target.checked);
        this.setState({inputTerms: e.target.checked});
    }

    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre:</label>
                        <input 
                            id="name" 
                            name="userName" 
                            placeholder="Introduce el nombre" 
                            onChange={e => this.setState({inputName: e.target.value})}
                            ref={inputElement => this.inputName = inputElement} 
                            value={this.state.inputName} />
                    </p>

                    <p>
                        <label htmlFor='twitter'>Twitter:</label>
                        <input 
                            id="twitter" 
                            name="twitterAccount" 
                            onChange={e => this.setState({inputTwitter: e.target.value})}
                            placeholder="Introduce el twitter" 
                            value={this.state.inputTwitter} />
                    </p>

                    <p>
                        <label>
                            <input 
                                onChange={this.handleChange} 
                                type='checkbox' 
                                checked={this.state.inputTerms} />
                            Aceptar
                        </label>
                    </p>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}