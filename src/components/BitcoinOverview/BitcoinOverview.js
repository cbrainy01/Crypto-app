import React from 'react';
import { PriceChart, VolumeChart } from 'components';
import { StyledBitcoinOverview } from './BitcoinOverview.styles';

export class BitcoinOverview extends React.Component {
    state={
        timeSpan: "1"
    }
  
    handleChange = (e) => { this.setState({ timeSpan: e.target.value }) }

    render() {
        return (
            <StyledBitcoinOverview>
                <h1>Bitcoin Overview</h1>
                <PriceChart currencySymbol={this.props.currencySymbol} currency={this.props.currency.toString()} timeSpan={this.state.timeSpan} />
                <select onChange={this.handleChange}>
                    <option value={1}>1m</option>
                    <option value={"1week"}>1w</option>
                    <option value={3}>3m</option>
                    <option value={6}>6m</option>
                    <option value={12}>1y</option>
                </select>
                <VolumeChart currencySymbol={this.props.currencySymbol} currency={this.props.currency.toString()} timeSpan={this.state.timeSpan} />
            </StyledBitcoinOverview>
        )
  }
}

export default BitcoinOverview

