import React from 'react';
import PriceChart from 'components/PriceChart';
import VolumeChart from 'components/VolumeChart';
import { StyledBitcoinOverview } from './BitcoinOverview.styles';

export class BitcoinOverview extends React.Component {
  render() {
    return (
    <StyledBitcoinOverview>
        <h1>Bitcoin Overview</h1>
        <PriceChart currency={ this.props.currency }/>
        <VolumeChart currency={ this.props.currency } />
    </StyledBitcoinOverview>
    )
  }
}

export default BitcoinOverview

