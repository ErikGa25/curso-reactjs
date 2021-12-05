import React, { Component } from 'react';
import BitcoinPrice from './presentational';

// contenedor
//tiene la logica, un state recupera los datos del servidor y hace las transformaciones necesarias

class FetchContainer extends Component {
    // aqui se guardara la respuesta del fetch
    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { bpi } = data;
                this.setState({bpi});
            })
    }

    render() {
        return(
            <BitcoinPrice bpi={this.state.bpi} />
        );
    }
}

export default FetchContainer;