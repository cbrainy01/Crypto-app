import React from 'react'
import { CoinChart } from 'components'
import { formatNumber, getCurrencySymbol, renderPercentChange, getPercentage } from 'utils'
import Bullet from "icons/Bullet.svg"
import { StyledCoin, TH, TD, ProgressDisplay, MarketCap } from './Coin.styles'



export class Coin extends React.Component {

  handleCoinSelect = () => {
    const selectedCoin = this.props.coinData.id
    this.props.history.push(`/coinpage/${selectedCoin}`)
  }

  render() {
    const data = this.props.coinData
    const index = this.props.index
    const currencySymbol = getCurrencySymbol(this.props.currency)
    return (
      <StyledCoin>
        <TH>{index}</TH>
        <TD>
          <div>
            <img src={data.image} alt={data.name} />
            <p onClick={this.handleCoinSelect}>
              {data.name}({data.symbol})
            </p>
          </div>
        </TD>
        <TD>
          {currencySymbol}
          {data.current_price}
        </TD>
        <TD>
          {renderPercentChange(data.price_change_percentage_1h_in_currency) || "-"}
        </TD>
        <TD>
          {renderPercentChange(data.price_change_percentage_24h_in_currency) || "-"}
        </TD>
        <TD>
          {renderPercentChange(data.price_change_percentage_7d_in_currency) || "-"}
        </TD>
        <TD>
          <MarketCap>
            <div>
              <span>
                <img src={Bullet} alt="bullet point" />
              </span>
              <span>{formatNumber(data.total_volume)}</span>
              <span>
                <img src={Bullet} alt="bullet point" />
              </span>
              <span>{formatNumber(data.market_cap)}</span>
            </div>
            <div>
              <ProgressDisplay
                percentage={getPercentage(data.total_volume, data.market_cap)}
              >
                <div></div>
              </ProgressDisplay>
            </div>
          </MarketCap>
        </TD>
        <TD>
          <MarketCap>
            <div>
              <span>
                <img src={Bullet} alt="bullet point" />
              </span>
              <span>{formatNumber(data.circulating_supply)}</span>
              <span>
                <img src={Bullet} alt="bullet point" />
              </span>
              <span>{formatNumber(data.total_supply)}</span>
            </div>
            <div>
              <ProgressDisplay
                percentage={getPercentage(
                  data.circulating_supply,
                  data.total_supply
                )}
              >
                <div></div>
              </ProgressDisplay>
            </div>
          </MarketCap>
        </TD>
        <TD>
          <CoinChart prices={data["sparkline_in_7d"].price.slice().reverse()} />
        </TD>
      </StyledCoin>
    );
  }
}

export default Coin