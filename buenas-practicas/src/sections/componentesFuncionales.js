import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*class Article extends Component {
    render() {
        return(
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito: {this.props.author}</em></p>
                <date>{this.props.date}</date>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}*/

function Article(props) {
  return(
    <section>
        <h2>{props.title}</h2>
        <p><em>Escrito: {props.author}</em></p>
        <date>{props.date}</date>
        <article>
            {props.children}
        </article>
    </section>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.any
}

/*class Button extends Component {
    render() {
      return(
        <button style={{borderColor: this.props.borderColor, display: 'block'}}>
          {this.props.label}
        </button>
      )
    }
}*/

const Button = ({borderColor, label}) => (
  <button style={{borderColor, display: 'block'}}>
    {label}
  </button>
)

Button.defaultProps = {
  borderColor: 'blue'
}

Button.propTypes = {
  borderColor: PropTypes.string,
  label: PropTypes.string.isRequired
}

class AppComponent extends Component {
    render () {
      return (
        <div className="App">
          <h4>Children props</h4>
          <Article
            author='Miguel'
            date={new Date().toLocaleDateString()}
            title='Artículo sobre la prop children'
          >
            <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
            <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
          </Article>
          <br/>
          <Button label="Comentar Articulo"/>
        </div>
      );
    }
}

export default AppComponent;