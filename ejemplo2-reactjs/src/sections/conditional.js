import React, { Component } from 'react';

class ComponenteA extends Component {
    render() {
        return <p>Componente A</p>
    };
}

class ComponenteB extends Component {
    render() {
        return <p>Componente A</p>
    };
}

class LoginButton extends Component {
    render() {
        return <button>Iniciar Sesión</button>
    };
}

class LogoutButton extends Component {
    render() {
        return(
            <div>
                <p>Bienvenido, Usuario!</p>
                <button>Cerrar Sesión</button>
            </div>
        );
    };
}

/*function UseConditionalRendering(mostrarA) {
    if(mostrarA){ 
        return <ComponenteA />
    }
    return <ComponenteB />
}*/

export default class ConditionalSection extends Component {
    constructor() {
        super();
        this.state = { mostrarA: true, isUserLogged: false }
    }

    render() {
        //const conditionalComponent = this.state.mostrarA ? <ComponenteA /> : <ComponenteB />
        
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.mostrarA ? <ComponenteA /> : <ComponenteB />}
                {this.state.isUserLogged ? <LoginButton /> : <LogoutButton />}
            </div>
        )
    }
}