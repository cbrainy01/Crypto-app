import React from 'react'
import { StyledNavbarGlobal } from './NavbarGlobal.styles'
import { formatNumber } from 'utils/formatNumber'

export class NavbarGlobal extends React.Component {
  

    render() {
    let data 
    this.props.data ? {data} = this.props.data : data = null
    const currency = this.props.currency
    return( 
        this.props.data && 
        <StyledNavbarGlobal>
            <h2>Navbar global</h2>
            <div>active currencies: {data.active_cryptocurrencies}</div>
            <div>markets: {data.markets}</div>
            <div>total market cap: {formatNumber(data.total_market_cap[currency])}</div>
            <div>total volume: {formatNumber(data.total_volume[currency])}</div>
            <div>market cap % bitcoin: {Math.round(data.market_cap_percentage["btc"])}%</div>
            <div>market cap % ethereum: {Math.round(data.market_cap_percentage["eth"])}%</div>
        </StyledNavbarGlobal>
    )}
}

export default NavbarGlobal