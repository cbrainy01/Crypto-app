import React from "react";
import BitcoinOverview from "components/BitcoinOverview/index";

export default class CoinList extends React.Component {

    render() {
        return (
        <div>
            CoinList page
            <BitcoinOverview currency={ this.props.currency }/>      
        </div>)
    }
}