import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json';
import {Component} from 'react';


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
      </header>
    </div>
  );
}

export default App;
