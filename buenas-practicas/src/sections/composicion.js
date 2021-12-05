import React, { Component } from 'react';

/**
 * Se debe evitar usar la Herencia de clases, es mejor usar la composición
 */
 class Button extends Component {
    render() {
      return(
        <button style={{borderColor: this.props.borderColor, display: 'block'}}>
          {this.props.label}
        </button>
      )
    }
}
  
Button.defaultProps = {
    borderColor: '#09f'
}
  
class ButtonDanger extends Component {
    render() {
      return <Button borderColor='red' label={this.props.label} />
    }
}

class ButtonWithLegend extends Component {
    render() {
      return(
        <div>
          <Button label={this.props.label} borderColor={this.props.borderColor} />
          <small>{this.props.legend}</small>
        </div>
      )
    }
}

class ButtonComposicion extends Component {
    render() {
        return(
            <div>
                <Button label='Click aquí | Composición' />
                <br/>
                <ButtonDanger label="Cuidado!! | Composición" />
                <br/>
                <ButtonWithLegend label="Botón con Composición" legend="Click para hacer algo" />
            </div>
        )
    }
}

export default ButtonComposicion