import './App.css';
import React, { Component } from 'react';
import ComponentWillMount from './sections/life-cycle/componentWillMount';
import Render from './sections/life-cycle/render';
import EjemploDeComponentDidMount from './sections/life-cycle/componentDidMount';
import Fetch from './sections/api/fetch-example';
import EjemploDeCicloDeActualizacion from './sections/life-cycle/ejemploCicloDeActualizacion';
import EjemploDeComponentWillUnmount from './sections/life-cycle/componentWillUnmount';
import EjemploDeComponentDidCatch from './sections/life-cycle/componentDidCatch';

class App extends Component {
  constructor(props) {
    super(props); // este metodo llama al constructor del Component
    this.state = {mensajeInicial: 'mensaje inicial'} // inicializamos el state del componente
    //this.handleClick = this.handleClick.bind(this); // bideamos el contexti al método
  }

  // forma recomendada
  handleClick = (e) => {
    this.setState({mensajeInicial: 'nuevo mensaje'})
  }

  render() {
    return(
      <div className="App">
        <h4>Ciclio de vida del componente</h4>
        {this.state.mensajeInicial} | 
        <button onClick={this.handleClick}>Cambiar Mensaje</button>
        <ComponentWillMount/>

        <Render/>

        <EjemploDeComponentDidMount />

        <Fetch />

        <EjemploDeCicloDeActualizacion />

        <EjemploDeComponentWillUnmount/>

        <EjemploDeComponentDidCatch />
      </div>
    )
  }
}

export default App;
