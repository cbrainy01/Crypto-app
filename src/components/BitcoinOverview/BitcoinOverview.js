import React from 'react';
import { PriceChart, VolumeChart } from 'components';
import { StyledBitcoinOverview } from './BitcoinOverview.styles';

export class BitcoinOverview extends React.Component {
    render() {
        return (
            <StyledBitcoinOverview>
                <PriceChart currency={this.props.currency.toString()} timeSpan={this.props.timeSpan} />
                <VolumeChart currency={this.props.currency.toString()} timeSpan={this.props.timeSpan} />
            </StyledBitcoinOverview>
        )
  }
}

export default BitcoinOverview

