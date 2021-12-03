import React, { Component } from 'react'

class ComponenteADesmontar extends Component {
  state = { windowWidth: 0 }

  _updateStateWithWindowWidth = () => {
    console.log('_updateStateWithWindowWidth')
    this.setState({ windowWidth: document.body.clientWidth })
  }

  // se ejcuta tras renderizar el componente
  // ya tendremos una representación del DOM
  // aqui se añaden las llamadas para recuperar datos del servidor y escuchar eventos
  componentDidMount () {
    this._updateStateWithWindowWidth()
    window.addEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

   // se ejecuta justo antes de desmontar el componente
    // permite eliminar suscripciones a eventos, cancelar peticiones, limpiar intervalos y liberar recursos
    // no se debe llamar al state
  componentWillUnmount () {
    console.log('componentWillUnmount')
    window.removeEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

  render () {
    return (
      <div>
        <p>Ancho de la ventana: {this.state.windowWidth}</p>
      </div>
    )
  }
}

class EjemploDeComponentWillUnmount extends Component {
  state = { mostrarComponente: true }

  render () {

    if (this.state.mostrarComponente) {
      return (
        <div>
          <h4>Ciclo de desmontaje: componentWillUnmount</h4>
          <ComponenteADesmontar />
          <button onClick={() => this.setState({ mostrarComponente: false })}>
            Desmontar componente
          </button>
        </div>
      )
    }

    return (
      <button onClick={() => this.setState({ mostrarComponente: true })}>
        Montar componente
      </button>
    )
  }
}

export default EjemploDeComponentWillUnmount