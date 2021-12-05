import React, { Component } from 'react';

// contenido
// solo se ocupa de representar los datos en un layout
function RenderCurrencies(props) {
    const { bpi } = props;
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

class BitcoinPrice extends Component {
    /*_renderCurrencies() {
        const { bpi } = this.props;
        const currencies = Object.keys(bpi);

        return currencies.map(currency => 
            (
                <div key={currency}>
                    1 BTC is {bpi[currency].rate}
                    <span>{currency}</span>
                </div>
            )
        )
    }*/

    render() {
        return(
            <div>
                <h4>Fetch API | BITCOIN</h4>
                {/*this._renderCurrencies()*/}
                <RenderCurrencies bpi={this.props.bpi} />
            </div>
        )
    }
}

export default BitcoinPrice;