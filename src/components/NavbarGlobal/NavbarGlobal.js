import React from 'react'
import { formatNumber, progressBar } from 'utils'
import { StyledNavbarGlobal, MarketData1, MarketData2, MarketData3, MarketData4, MarketData5, MarketData6, MarketDataContainer, NavbarGlobalContainer } from './NavbarGlobal.styles'

export class NavbarGlobal extends React.Component {
    render() {
    const currency = this.props.currency
    let data = this.props.globalData
    return( 
        this.props.globalData && 
        <StyledNavbarGlobal>
            <NavbarGlobalContainer>
                <MarketDataContainer>
                    <MarketData1>
                        <p>Coins</p>
                        <p>{data.active_cryptocurrencies}</p>
                    </MarketData1>
                    <MarketData2>
                        <p>Exchange</p>
                        <p>{data.markets}</p>
                    </MarketData2>
                    <MarketData3>
                        <p>*</p>
                        <p>{formatNumber(data.total_market_cap[currency])}</p>
                        <p>^</p>
                    </MarketData3>
                    <MarketData4>
                        <div>*</div>
                        <div>{formatNumber(data.total_volume[currency])}</div>
                        <div>{progressBar(Math.round((data.total_volume[currency]) / (data.total_market_cap[currency]) * 100), "blue", "red", 55, "14")}</div>
                    </MarketData4>
                    <MarketData5>
                        <div>b</div>
                        <div>{Math.round(data.market_cap_percentage["btc"])}%</div>
                        <div>{progressBar(Math.round(data.market_cap_percentage["btc"]), "blue", "red", 55, "14")}</div>
                    </MarketData5>
                    <MarketData6>
                        <div>e</div>
                        <div>{Math.round(data.market_cap_percentage["eth"])}%</div>
                        <div>{progressBar(Math.round(data.market_cap_percentage["eth"]), "blue", "red", 55, "14")}</div>
                    </MarketData6>
                </MarketDataContainer>
            </NavbarGlobalContainer>
        </StyledNavbarGlobal>
    )}
}

export default NavbarGlobal