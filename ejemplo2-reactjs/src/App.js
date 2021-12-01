import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json';
import {Component} from 'react';
import Forms from './sections/forms';
import PropTypes from 'prop-types';

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

class Box extends Component {
  render() {
    return(
      <div style={{border:'1px solid #000', margin:5,padding:5}}>
        {this.props.children}
      </div>
    )
  }
}
class Article extends Component {
  //validar los tipos de dato
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  /*constructor(props) {
    super(props);

    if(typeof props.author === 'undefined') {
      console.warn('author es requrido');
      throw new Error('author es requerido');
    }
  }*/
  render () {
    const {author, title, date, children} = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

// forma de agregar las prototypes, no recomendada
/*Article.propTypes = {
  author: PropTypes.string
}*/

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

        <h4>children props</h4>
        <Box>Hola soy un children</Box>
        <Box>Otro Box</Box>

        <Article
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>

        <Article
          author={1111}
          date={new Date().toLocaleDateString()}
          title='Artículo 2'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        
        <Article
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Otro artículo'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
      </header>
    </div>
  );
}

export default App;
