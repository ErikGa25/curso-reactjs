import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Formas de crear un componente
//1. funcion
function Hello(props) {
  return <h2>{props.title}</h2>
}
// 2. arrow function
const Hello2 = props => <h3>{props.title}</h3>

//3. Clase
class Hello3 extends Component {
  render() {
    return <h4>{this.props.title}</h4>
  }
}

class Text extends Component {
  render() {
    // LAS PROPS NO SE PUEDE MODIFICAR SU VALOR
    console.log(this.props)
    // destructuring de los parametros
    const { boolean, isActivated, arrayOfNumbers, objetcWithInfo, title } = this.props;

    // variable
    let textoSegunBool = boolean ? 'Cierto' : 'Falso';
    // si se envia un valor sin nada asignado su valor por defecto sera TRUE
    let bandera = isActivated ? 'Encendido' : 'Apagado';
    // array
    let arrayNumbers = arrayOfNumbers.map(n => n * 2);
    //función
    let myFunction = arrayOfNumbers.map(this.props.multiple);
    // acceder a los valores de un objeto
    let myObject = objetcWithInfo;

    return(
      <div>
        {title}
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{bandera}</p>
        <p>{arrayNumbers.join(', ')}</p>
        <p>{myObject.key}</p>
        <p>{myFunction.join(', ')}</p>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

// asignamos un valor defecto por si no se le pasa ninguno
Title.defaultProps = {
  text: 'Titulo por defecto'
}

// Componente Padre
class Contador extends Component {
  // nueva forma de declararlo
  //state = { contador: 12 };

  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };
    // modificamos el valor del state
    setInterval(() => {
      this.setState({contador: this.state.contador + 1});
    }, 2000);
  }

  // renderizamos el resultado llamando a otro componente
  render() {
    return <ContadorNumero numero={this.state.contador} />
  }
}
// valor por defecto
Contador.defaultProps = {
  contadorInicial: 0
}

// componente hijo
class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola desde REACT JS</p>

        <Hello title="Hola desde un H2" />
        <Hello2 title="Hola desde un H3" />
        <Hello3 title="Hola desde un H4" />
        <Text 
          arrayOfNumbers={[2, 3, 10]}
          boolean={true} 
          isActivated 
          multiple={(number)=> number * 4}
          number={130} 
          objetcWithInfo = { { key: 'Valor 1', key2: 'Valor 2' } }
          text="Texto de prueba" 
          title={<h1>Esto es un H1</h1>}
        />
        <Title />
        <Contador contadorInicial={100} />
      </header>
    </div>
  );
}

export default App;
