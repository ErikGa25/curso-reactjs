import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://cdn.pixabay.com/photo/2016/03/04/22/54/panda-1236875_960_720.jpg',
  cat: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg',
  dolphin: 'https://cdn.pixabay.com/photo/2018/10/24/01/09/dolphins-3769402_960_720.jpg'
}
const ANIMALS = Object.keys(ANIMAL_IMAGES)

// con Pure componente obtenemos el mismo resultado con shouldComponentUpdate, solo con props y states simples
class AnimalImage extends PureComponent {
  // la dirección de la imagen
  state = { src: ANIMAL_IMAGES[this.props.animal] }

  // se ejecuta solo cuando el componente va a recibir nuevas props
  componentWillReceiveProps (nextProps) {
    /**
     * nextProps pueden ser las mismas props que tenemos, pero entrará igualmente a este método
     * Nuevas props no quiere decir que son distintas a las que teníamos
     */
    console.clear()
    console.log('1. componentWillReceiveProps', nextProps)
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
  }

  // se ejecuta antes de actualizar el componente
  // determina si el componente debe de actualizar
  // devuelve un valor booleano, no se llama al state, devuelve true pro defecto
  /*shouldComponentUpdate (nextProps) {
    console.log('2. shouldComponentUpdate', nextProps)
    return this.props.animal !== nextProps.animal
  }*/

  // se ejecuta antes de actualizar el componente
  // no se ejecuta si shouldComponentUpdate devolvio false
  // sólo para animaciones
  componentWillUpdate (nextProps, nextState) {
    console.log('3. componentWillUpdate', nextProps, nextState)
    const img = document.querySelector('img')
    console.log('from img element', { alt: img.alt })
    // web animations api
    img.animate([ {
      filter: 'blur(0px)'
    }, {
      filter: 'blur(2px)'
    }], {
      duration: 500,
      easing: 'ease'
    })
  }

  // se ejecuta tras actualizar el componente
  // ejcuta funciones de librerias externas, usar el nuevo DOM o hacer llamadas externas
  // no se debe llamar al setState
  componentDidUpdate (prevProps, prevState) {
    console.log('4. componentDidUpdate')
    const img = document.querySelector('img')
    img.animate([
      {
        filter: 'blur(2px)'
      },
      {
        filter: 'blur(0px)'
      }
    ], {
      duration: 1500,
      easing: 'ease'
    })
    console.log('from img element', { alt: img.alt })
  }

  render () {
    console.log('-> render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}
//los valores que acepta
AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
}

/*AnimalImage.defaultProps = {
    animal: 'panda'
}*/

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: 'panda' }

  _renderAnimalButton = (animal) => {
    return (
      <button
        //disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}>
        {animal}
      </button>
    )
  }

  render () {
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de: ComponentDidUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion