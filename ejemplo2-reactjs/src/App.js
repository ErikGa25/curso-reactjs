import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json';
import {Component} from 'react';
import Forms from './sections/forms';

class CarItem extends Component {
  render() {
    const {car, id} = this.props;

    return(
      <li>
        {id}
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}

class Events extends Component {
  constructor() {
    super();
    this.state = {mouseX: 0, mouseY:0}
    //this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  // evento para el click
  handleClick(e) {
    console.log(e);
    alert('Hola');
  }

  // evento on mouse over, con arrow function enlazamos el contexto del componente al evento
  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({mouseX: clientX, mouseY: clientY});
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Click</button>
        <div onMouseMove={this.handleMouseMove} style={{border: '1px solid #000', marginTop: 10, padding: 10}}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    );
  }
}

function App() {
  const numbers = [1, 1, 3, 4, 5];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>EJEMPLO 2 - REACT JS</p>
        <ConditionalSection />
        <h4>Listas</h4>
        {numbers.map((number, index) => {
          // la key es para darle un valor unico con el que podamos identificar el elemento
          return <p key={index}>Soy el número {number}</p>
        })}
        <h4>Listas de objetos</h4>
        <ul>
          {cars.map(car => {
            return <CarItem id={car.id} key={car.id} car={car} />
          })}
        </ul>

        <h4>Eventos</h4>
        <button onClick={() => alert('Hola desde Click')}>Click aquí!!</button>

        <Events />

        <Forms />
      </header>
    </div>
  );
}

export default App;
