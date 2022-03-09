import axios from "axios";
import React, { useState, useEffect } from "react";
import { CoinPageChart, CurrencyExchange, ErrorDisplay } from "components";
import { renderPercentChange, getCurrencySymbol, formatNumber } from "utils";
import {
  CoinDescription,
  CoinLinks,
  CoinLink,
  CoinSummary,
  StyledCoinPage,
  SummaryA,
  SummaryB,
  SummaryC,
  Bar,
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
          <h1>Your Summary:</h1>
          <CoinSummary>
            <SummaryA>
              <section>
                <img src={coinData.image.small} alt={coinData.name} />
                <div>
                  {coinData.name}({coinData.symbol.toUpperCase()})
                </div>
                <div>
                  <img src={Link} alt="link icon" />
                  <a href={coinData.links.homepage[0]}>
                    {coinData.links.homepage[0]}
                  </a>
                </div>
              </section>
            </SummaryA>
            <SummaryB>
              <section>
                <div>
                  <span>
                    {currencySymbol}
                    {coinData.market_data.current_price[currency]}
                  </span>
                  <span>
                    {renderPercentChange(
                      coinData.market_data.price_change_percentage_24h
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
                      {coinData.market_data.ath[currency]}
                    </p>
                    <p>{coinData.market_data.ath_date[currency]}</p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={Downtick} alt="downtick" />
                  </span>
                  <span>
                    <p>
                      All Time Low: {currencySymbol}
                      {coinData.market_data.atl[currency]}
                    </p>
                    <p>{coinData.market_data.atl_date[currency]}</p>
                  </span>
                </div>
              </section>
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
