import axios from "axios";
import numeral from "numeral";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { CoinPageChart, ErrorDisplay } from "components";
import { getCurrencySymbol, formatNumber, isoToStandardTime } from "utils";
import { useSelector, useDispatch } from "react-redux";
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
  SummaryCTop,
  SummaryCBottom,
  BarContainer,
  LeftPct,
  RightPct,
  Description,
  DescriptionContainer,
  SummaryWrap,
} from "./CoinPage.styles";
import { getCoinData } from "store/coinData/actions";
import Link from "icons/Link.svg";
import Stack from "icons/Stack.svg";
import Uptick from "icons/Uptick.svg";
import Downtick from "icons/Downtick.svg";
import Plus from "icons/Plus.svg";
import Copy from "icons/Copy.svg";
import Bullet from "icons/Bullet.svg"

export default function CoinPage(props) {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [coinData, setCoinData] = useState(null);
  const dispatch = useDispatch();
  const coinId = props.match.params.coin;
  
  const currency = useSelector((state) => state.currency);
  const isLoading = useSelector((state) => state.coinData.isLoading);
  const error = useSelector((state) => state.coinData.error);
  const coinData = useSelector((state) => state.coinData.data);

  const currencySymbol = getCurrencySymbol(currency);
  const circulating = Math.round(
    (coinData?.market_data.circulating_supply /
      coinData?.market_data.max_supply) *
      100
  );
  const volume = Math.round(
    (coinData?.market_data.total_volume["btc"] /
      coinData?.market_data.max_supply || 1) *
      100
  );

  // const getCoinData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const { data } = await axios(
  //       `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  //     );
  //     setIsLoading(false);
  //     setCoinData(data);
  //   } catch (err) {
  //     setIsLoading(false);
  //     setError(err);
  //   }
  // };

  function getProfit(price, pctChangeString) {
    const pctChange = parseFloat(pctChangeString)
    const profit =  ((pctChange / 100) * price).toFixed(3)  
    if(isNaN(pctChange)) {return `${currencySymbol}0`}
    if( pctChange >= 0 ) { return `${currencySymbol}${profit}` }
    else if( pctChange < 0 ) { return`-${currencySymbol}${profit.slice(1)}` }
  }
  
  const handleClipboardCopy = (e) => {
    const copiedText = e.target.getAttribute("data-value");
    navigator.clipboard.writeText(copiedText);
  };

  function renderLinks() {
    const links =  coinData.links.blockchain_site.map( (siteLink, index) => {
      if(siteLink.length == 0) {return}
      return (<CoinLink key={uuid()}>
      <div>
        <a href={siteLink} target="_blank">
          <img src={Link} alt="link" />
        </a>
        <p>{siteLink}</p>
        <img
          onClick={handleClipboardCopy}
          data-value={siteLink}
          src={Copy}
          alt="copy"
        />
      </div>
    </CoinLink> )})
    return links.slice(0,3);
  }

  useEffect(() => {
    dispatch( getCoinData(coinId) );
  }, [currency, coinId]);

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
                    <p>{isoToStandardTime(coinData.market_data.ath_date[currency])}</p>
                  </span>
                </ATH>
                <ATL>
                  <img src={Downtick} alt="downtick" />
                  <span>
                    <p>
                      All Time Low: {currencySymbol}
                      {coinData.market_data.atl[currency]}
                    </p>
                    <p>{isoToStandardTime(coinData.market_data.atl_date[currency])}</p>
                  </span>
                </ATL>
            </SummaryB>

            <SummaryC>
              <section>
                <SummaryCTop>
                <div>
                  <img src={Plus} alt="plus" />
                  <span>Market cap: </span>
                  <p>
                    {currencySymbol}
                    {formatNumber(coinData.market_data.market_cap[currency])}
                  </p>
                  <span>
                    2.44%
                  </span>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <span>Fully Diluted Valuation: </span>
                  <p>
                    {currencySymbol}
                    {formatNumber(
                      coinData.market_data.fully_diluted_valuation[currency]
                    )}
                  </p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <span>Volume 24h: {currencySymbol}</span>
                </div>
                </SummaryCTop>
                <SummaryCBottom>
                <div>
                  <img src={Plus} alt="plus" />
                  <span>Total Volume: </span>
                  <p>{coinData.market_data.total_volume.btc}</p>
                  <p>{coinData.symbol.toUpperCase()}</p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <span>Circulating Supply: </span>
                  <p>{coinData.market_data.circulating_supply}</p>
                  <p>{coinData.symbol.toUpperCase()}</p>
                </div>
                <div>
                  <img src={Plus} alt="plus" />
                  <span>Max Supply: </span>
                  <p>{coinData.market_data.max_supply}{" "}</p>
                  <p>{coinData.symbol.toUpperCase()}</p>
                </div>
                </SummaryCBottom>
                <BarContainer>
                  <section>
                    <LeftPct>
                      <img alt="bullet point" src={Bullet}/>
                      <p>{volume > 100 ? "N/A" : `${volume}%`}</p>
                    </LeftPct>
                    <RightPct>
                    <img alt="bullet point" src={Bullet}/>
                    <p>{circulating > 100 ? "N/A" : `${circulating}%`}</p>
                    </RightPct>
                  </section>
                  <Bar circulating={circulating} volume={volume}>
                    <div></div>
                    <div></div>
                  </Bar>
                </BarContainer>
                
              </section>
            </SummaryC>
          </CoinSummary>
          <Description>Description</Description>
          <DescriptionContainer>
          <CoinDescription>
            <StackWrap><img alt="stack icon" src={Stack}/></StackWrap>
            <div
              dangerouslySetInnerHTML={{ __html: coinData.description.en }}
            ></div>
          </CoinDescription></DescriptionContainer>
          <CoinLinks>
              {renderLinks()}
          </CoinLinks>
          </CoinPageContainer> 
          <CoinPageChart
          coin={coinData.symbol}
          currentPrice={coinData.market_data.current_price[currency]}
          currency={currency}
          data={coinData.market_data.sparkline_7d.price} />
        </StyledCoinPage>
      )}
    </div>
  );
}
