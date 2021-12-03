import React, { Component } from 'react';

class Fetch extends Component {
    // aqui se guardara la respuesta del fetch
    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const {bpi} = data;
                this.setState({bpi});
            })
    }

    _renderCurrencies() {
        const {bpi} = this.state;
        const currencies = Object.keys(bpi);
        return currencies.map(currency => 
            (
                <div key={currency}>
                    1 BTC is {bpi[currency].rate}
                    <span>{currency}</span>
                </div>
            )
        )
    }

    render() {
        return(
            <div>
                <h4>Fetch API | BITCOIN</h4>
                {this._renderCurrencies()}
            </div>
        );
    }
}

export default Fetch;