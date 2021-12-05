import React, { Component } from 'react';

// ¡ESTO ES UNA MALA PRACTICA Y SOLO ES PARA VER COMO FUNCIONARIA!
/**
 * Se debe evitar usar la Herencia de clases, es mejor usar la composición
 */
class Button extends Component {
    constructor(props) {
      super(props);
      this.borderColor = '#09f';
    }
  
    render() {
      return(
        <button style={{borderColor: this.borderColor, display: 'block'}}>
          {this.props.label}
        </button>
      )
    }
}
  
Button.defaultProps = {
    borderColor: '#09f'
}
  
class ButtonDanger extends Button {
    constructor(props) {
      super(props);
      this.borderColor = 'red';
    }
}

class ButtonWithLegend extends Button {
    render() {
      return(
        <div>
          {super.render()}
          <small>{this.props.legend}</small>
        </div>
      )
    }
}

class ButtonClass extends Component {
    render() {
        return(
            <div>
                <Button label='Click aquí | Clase' />
                <br/>
                <ButtonDanger label="Cuidado!! | Clase" />
                <br/>
                <ButtonWithLegend label="Botón con Clase" legend="Click para hacer algo" />
            </div>
        )
    }
}

export default ButtonClass;