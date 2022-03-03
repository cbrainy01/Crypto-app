import axios from "axios";
import React from "react";
import { CoinPageChart, CurrencyExchange, ErrorDisplay, SummaryData } from "components";
import { renderPercentChange, getCurrencySymbol, formatNumber } from "utils";
import { CoinDescription, CoinLinks, CoinLink, CoinSummary, StyledCoinPage, SummaryA, SummaryB, SummaryC, Bar } from "./CoinPage.styles";
import Link from "icons/Link.svg"
import Stack from "icons/Stack.svg"
import Uptick from "icons/Uptick.svg"
import Downtick from "icons/Downtick.svg"
import Plus from "icons/Plus.svg"
import Copy from "icons/Copy.svg"

export default class CoinPage extends React.Component {
  state = {
    isLoading: false,
    error: null,
    coinData: null,
  };

  getCoinData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.props.match.params.coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
      );
      this.setState({ isLoading: false, coinData: data });
    } catch (err) {
      this.setState({ isLoading: false, error: err });
    }
  };

  componentDidMount = () => {
    this.getCoinData();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.currency !== this.props.currency) {
      this.getCoinData();
    }
  };

  handleClipboardCopy = (e) => {
    const copiedText = e.target.getAttribute("data-value");
    navigator.clipboard.writeText(copiedText);
  };

  render() {
    const data = this.state.coinData;
    const currency = this.props.currency;
    const currencySymbol = getCurrencySymbol(this.props.currency);
    const keys = this.state.coinData && Object.keys(this.state.coinData.market_data)
    console.log("keys: ", keys)
    const circulating = Math.round(
      (data?.market_data.circulating_supply / data?.market_data.max_supply) *
        100
    );
    const volume = Math.round(
      (data?.market_data.total_volume["btc"] / data?.market_data.max_supply) *
        100
    );
    const symbol= this.state.coinData?.symbol.toUpperCase()
    
    const summaryCData = [data?.market_data.total_volume.btc, data?.market_data.circulating_supply, data?.market_data.max_supply]
    const renderSummary = summaryCData.map( (data) => <SummaryData data={data} symbol={symbol} ></SummaryData>)
    return (
      <div>
        {this.state.isLoading && <h1>...Loading</h1>}
        {this.state.error && <ErrorDisplay />}
        {this.state.coinData && (
          <StyledCoinPage>
            <h1>Your Summary:</h1>
            <CoinSummary>
              <SummaryA>
                <section>
                  <img src={data.image.small} alt={data.name} />
                  <div>
                    {data.name}({data.symbol.toUpperCase()})
                  </div>
                  <div>
                    <img src={Link} alt="link icon" />
                    <a href={data.links.homepage[0]}>
                      {data.links.homepage[0]}
                    </a>
                  </div>
                </section>
              </SummaryA>
              <SummaryB>
                <section>
                  <div>
                    <span>
                      {currencySymbol}
                      {data.market_data.current_price[currency]}
                    </span>
                    <span>
                      {renderPercentChange(
                        data.market_data.price_change_percentage_24h
                      )}
                    </span>
                  </div>
                  <div>
                    <img src={Stack} alt="stack icon" />
                  </div>
                  <div>
                    <span>
                      <img src={Uptick} alt="uptick" />
                    </span>
                    <span>
                      <p>
                        All Time High: {currencySymbol}
                        {data.market_data.ath[currency]}
                      </p>
                      <p>{data.market_data.ath_date[currency]}</p>
                    </span>
                  </div>
                  <div>
                    <span>
                      <img src={Downtick} alt="downtick" />
                    </span>
                    <span>
                      <p>
                        All Time Low: {currencySymbol}
                        {data.market_data.atl[currency]}
                      </p>
                      <p>{data.market_data.atl_date[currency]}</p>
                    </span>
                  </div>
                </section>
              </SummaryB>
              {/* TODO: */}
              <SummaryC>
                <section>
                  <div>
                    <img src={Plus} alt="plus" />
                    <p>Market cap: </p>
                    <p>
                      {currencySymbol}
                      {formatNumber(data.market_data.market_cap[currency])}
                    </p>
                    <p>
                      {renderPercentChange(
                        data.market_data.market_cap.change_percentage
                      )}
                    </p>
                  </div>
                  <div>
                    <img src={Plus} alt="plus" />
                    <p>Fully Diluted Valuation: </p>
                    <p>
                      {currencySymbol}
                      {formatNumber(
                        data.market_data.fully_diluted_valuation[currency]
                      )}
                    </p>
                  </div>
                  <div>
                    <img src={Plus} alt="plus" />
                    <p>Volume 24h: {currencySymbol}</p>
                  </div>
                  {renderSummary}
                  {/* <div>
                    <img src={Plus} alt="plus" />
                    <p>Total Volume</p>
                    <p>
                      {data.market_data.total_volume.btc}
                      {data.symbol.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <img src={Plus} alt="plus" />
                    <p>Circulating Supply</p>
                    <p>
                      {data.market_data.circulating_supply}
                      {data.symbol.toUpperCase()}
                    </p>
                  </div> */}
                  {/* <div>
                    <img src={Plus} alt="plus" />
                    <p>Max Supply</p>
                    <p>
                      {data.market_data.max_supply} {data.symbol.toUpperCase()}
                    </p>
                  </div> */}
                  <div>
                    <Bar circulating={circulating} volume={volume}>
                      <div></div>
                      <div></div>
                    </Bar>
                  </div>
                </section>
              </SummaryC>
            </CoinSummary>
            <h1>Description:</h1>
            <CoinDescription>
              <div
                dangerouslySetInnerHTML={{ __html: data.description.en }}
              ></div>
            </CoinDescription>
            <CoinLinks>
              <div>
                <CoinLink>
                  <div>
                    <a href={data.links.blockchain_site[0]} target="_blank">
                      <img src={Link} alt="link" />
                    </a>
                    <p>{data.links.blockchain_site[0]}</p>
                    <img
                      onClick={this.handleClipboardCopy}
                      data-value={data.links.blockchain_site[0]}
                      src={Copy}
                      alt="copy"
                    />
                  </div>
                </CoinLink>
                <CoinLink>
                  <div>
                    <a href={data.links.blockchain_site[1]} target="_blank">
                      <img src={Link} alt="link" />
                    </a>
                    <p>{data.links.blockchain_site[1]}</p>
                    <img
                      onClick={this.handleClipboardCopy}
                      data-value={data.links.blockchain_site[1]}
                      src={Copy}
                      alt="copy"
                    />
                  </div>
                </CoinLink>
                <CoinLink>
                  <div>
                    <a href={data.links.blockchain_site[2]} target="_blank">
                      <img src={Link} alt="link" />
                    </a>
                    <p>{data.links.blockchain_site[2]}</p>
                    <img
                      onClick={this.handleClipboardCopy}
                      data-value={data.links.blockchain_site[2]}
                      src={Copy}
                      alt="copy"
                    />
                  </div>
                </CoinLink>
              </div>
            </CoinLinks>
            <CurrencyExchange coin={this.state.coinData.symbol} currentPrice={this.state.coinData.market_data.current_price[this.props.currency]} currency={this.props.currency}/>
            <CoinPageChart data={this.state.coinData.market_data.sparkline_7d.price}/>
          </StyledCoinPage>
        )}
      </div>
    );
  }
}