import React from "react";
import { BitcoinOverview, Timespan, Coins } from "components";

export default class CoinList extends React.Component {
    state={
        timeSpan: "1"
    }

    handleTimespanChange = (newTimespan) => {
        this.setState({ timeSpan: newTimespan })
    }

    render() {
        return (
            <div>
                CoinList page
                <BitcoinOverview timeSpan={this.state.timeSpan} currency={this.props.currency}/>
                <Timespan handleTimespanChange={this.handleTimespanChange}/>
                <Coins currency={this.props.currency}/>     
            </div>
        )
    }
}