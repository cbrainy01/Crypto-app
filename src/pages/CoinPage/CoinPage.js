import axios from "axios";
import numeral from "numeral";
import React, { useState, useEffect } from "react";
import { CoinPageChart, CurrencyExchange, ErrorDisplay } from "components";
import { renderPercentChange, getCurrencySymbol, formatNumber } from "utils";
import {
  CoinDescription,
  CoinLinks,
  CoinLink,
  CoinSummary,
  ImgContainer,
  StyledCoinPage,
  SummaryA,
  SummaryB,
  SummaryC,
  Bar,
  YourSummary,
  CoinPageContainer,
  CoinName,
  SummaryATop,
  SummaryABottom,
  BPrice,
  PercentChange,
  Profit,
  StackWrap,
  ATH,
  ATL,
} from "./CoinPage.styles";
import Link from "icons/Link.svg";
import Stack from "icons/Stack.svg";
import Uptick from "icons/Uptick.svg";
import Downtick from "icons/Downtick.svg";
import Plus from "icons/Plus.svg";
import Copy from "icons/Copy.svg";

export default function CoinPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const num = numeral(coinData.market_data.price_change_percentage_24h).format("0.00");

  const coinId = props.match.params.coin;
  const currency = props.currency;
  const currencySymbol = getCurrencySymbol(currency);
  const circulating = Math.round(
    (coinData?.market_data.circulating_supply /
      coinData?.market_data.max_supply) *
      100
  );
  const volume = Math.round(
    (coinData?.market_data.total_volume["btc"] /
      coinData?.market_data.max_supply) *
      100
  );

  const getCoinData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
      );
      setIsLoading(false);
      setCoinData(data);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  function getProfit(price, pctChangeString) {
    const pctChange = parseFloat(pctChangeString)
    const profit =  ((pctChange / 100) * price).toFixed(3)  
    if(isNaN(pctChange)) {return `${currencySymbol}0`}
    if( pctChange >= 0 ) { return `${currencySymbol}${profit}` }
    else { return`-${currencySymbol}${profit}` }
  }

  useEffect(() => {
    getCoinData();
  }, [currency, coinId]);

  const handleClipboardCopy = (e) => {
    const copiedText = e.target.getAttribute("data-value");
    navigator.clipboard.writeText(copiedText);
  };

  return (
    <div>
      {isLoading && <h1>...Loading</h1>}
      {error && <ErrorDisplay />}
      {coinData && (
        <StyledCoinPage>
          <CoinPageContainer>
          <YourSummary>Your Summary</YourSummary>
          <CoinSummary>
            <SummaryA>
                <SummaryATop>
                <ImgContainer>
                  <img src={coinData.image.small} alt={coinData.name} />
                </ImgContainer>
                <CoinName>
                  {coinData.name}({coinData.symbol.toUpperCase()})
                </CoinName>
                </SummaryATop>
                <SummaryABottom>
                  <img src={Link} alt="link icon" />
                  <a href={coinData.links.homepage[0]}>
                    {coinData.links.homepage[0]}
                  </a>
                </SummaryABottom>
             </SummaryA>

            <SummaryB>
                <BPrice>
                  <div>
                    {currencySymbol}
                    {coinData.market_data.current_price[currency]}
                  </div>
                  <PercentChange color={coinData.market_data.price_change_percentage_24h >= 0 ? "#00FC2A" : "red"}>
                    <img src={coinData.market_data.price_change_percentage_24h >= 0 ? Uptick : Downtick}/>
                    {numeral(coinData.market_data.price_change_percentage_24h).format("0.00")}%
                  </PercentChange>
                </BPrice>
                <Profit color={coinData.market_data.price_change_percentage_24h >= 0 ? "#00FC2A" : "red"}>
                  <p>Profit: </p><span> {getProfit(coinData.market_data.current_price[currency], numeral(coinData.market_data.price_change_percentage_24h).format("0.00"))}</span>
                </Profit>
                <StackWrap>
                    <img src={Stack} alt="stack icon" />
                </StackWrap>
                <ATH>
                    <img src={Uptick} alt="uptick" />
                  <span>
                    <p>
                      All Time High: {currencySymbol}
                      {coinData.market_data.ath[currency]}
                    </p>
                    <p>{coinData.market_data.ath_date[currency]}</p>
                  </span>
                </ATH>
                <ATL>
                  <img src={Downtick} alt="downtick" />
                  <span>
                    <p>
                      All Time Low: {currencySymbol}
                      {coinData.market_data.atl[currency]}
                    </p>
                    <p>{coinData.market_data.atl_date[currency]}</p>
                  </span>
                </ATL>
            </SummaryB>

            <SummaryC>
              <section>
                <div>
                  <img src={Plus} alt="plus" />
                  <p>Market cap: </p>
                  <p>
                    {currencySymbol}
                    {formatNumber(coinData.market_data.market_cap[currency])}
                  </p>
                  <p>
                    {renderPercentChange(
                      coinData.market_data.market_cap.change_percentage
                    )}
                  </p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <p>Fully Diluted Valuation: </p>
                  <p>
                    {currencySymbol}
                    {formatNumber(
                      coinData.market_data.fully_diluted_valuation[currency]
                    )}
                  </p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <p>Volume 24h: {currencySymbol}</p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <p>Total Volume: </p>
                  <p>
                    {coinData.market_data.total_volume.btc}
                    {coinData.symbol.toUpperCase()}
                  </p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <p>Circulating Supply: </p>
                  <p>
                    {coinData.market_data.circulating_supply}
                    {coinData.symbol.toUpperCase()}
                  </p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <p>Max Supply: </p>
                  <p>
                    {coinData.market_data.max_supply}{" "}
                    {coinData.symbol.toUpperCase()}
                  </p>
                </div>
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
              dangerouslySetInnerHTML={{ __html: coinData.description.en }}
            ></div>
          </CoinDescription>
          <CoinLinks>
            <div>
              <CoinLink>
                <div>
                  <a href={coinData.links.blockchain_site[0]} target="_blank">
                    <img src={Link} alt="link" />
                  </a>
                  <p>{coinData.links.blockchain_site[0]}</p>
                  <img
                    onClick={handleClipboardCopy}
                    data-value={coinData.links.blockchain_site[0]}
                    src={Copy}
                    alt="copy"
                  />
                </div>
              </CoinLink>
              <CoinLink>
                <div>
                  <a href={coinData.links.blockchain_site[1]} target="_blank">
                    <img src={Link} alt="link" />
                  </a>
                  <p>{coinData.links.blockchain_site[1]}</p>
                  <img
                    onClick={handleClipboardCopy}
                    data-value={coinData.links.blockchain_site[1]}
                    src={Copy}
                    alt="copy"
                  />
                </div>
              </CoinLink>
              <CoinLink>
                <div>
                  <a href={coinData.links.blockchain_site[2]} target="_blank">
                    <img src={Link} alt="link" />
                  </a>
                  <p>{coinData.links.blockchain_site[2]}</p>
                  <img
                    onClick={handleClipboardCopy}
                    data-value={coinData.links.blockchain_site[2]}
                    src={Copy}
                    alt="copy"
                  />
                </div>
              </CoinLink>
            </div>
          </CoinLinks>
          </CoinPageContainer> 
          <CurrencyExchange
            coin={coinData.symbol}
            currentPrice={coinData.market_data.current_price[currency]}
            currency={currency}
          />
          <CoinPageChart data={coinData.market_data.sparkline_7d.price} />
        </StyledCoinPage>
      )}
    </div>
  );
}
