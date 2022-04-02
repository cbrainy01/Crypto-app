import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrencySymbol, renderPercentChange, formatNumber } from "utils";
import {
  AmtPriceChange,
  AmtValue,
  CircVsMax,
  CoinAmt,
  CoinContainer,
  CoinDisplay,
  CoinId,
  CoinImgContainer,
  CoinName,
  CurrentPrice,
  MarketCapVsVolume,
  MarketPriceHeader,
  MarketPriceStatistics,
  PriceChange24H,
  ProgressBar,
  PurchaseDate,
  StatisticInfo,
  StatisticsContainer,
  StyledPurchasedCoins,
  YourCoinHeader,
  YourCoinStatistics,
  YourStatisticsHeader,
} from "./PurchasedCoins.styles";
import Uptick from "icons/Uptick.svg";
import Downtick from "icons/Downtick.svg";

function PurchasedCoins(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const currency = useSelector((state) => state.universalVariables.currency);
  const currencySymbol = getCurrencySymbol(currency);

  const priceChange24H = formatNumber(
    data.market_data.price_change_percentage_24h
  );
  const marketCapVsVolume = Math.round(
    data.market_data.market_cap[currency] /
      data.market_data.total_volume[currency]
  );
  const circVsMax = Math.round(
    data.market_data.circulating_supply / data.market_data.max_supply
  );

  return (
    <StyledPurchasedCoins>
      <StatisticsContainer>
        <YourStatisticsHeader>Your statistics</YourStatisticsHeader>
        <CoinContainer>
          <CoinId>
            <CoinDisplay>
              <CoinImgContainer>
                <img src={data.image.small} alt={data.name} />
              </CoinImgContainer>
              <CoinName>
                {data.name} ({data.symbol.toUpperCase()})
              </CoinName>
            </CoinDisplay>
          </CoinId>
          <StatisticInfo>
            <MarketPriceHeader>Market price: </MarketPriceHeader>
            <MarketPriceStatistics>
              <CurrentPrice>
                Current price:
                <p>
                  {currencySymbol}
                  {data.market_data.current_price[currency]}
                </p>
              </CurrentPrice>
              <PriceChange24H value={priceChange24H}>
                Price change 24h
                <img src={priceChange24H >= 0 ? Uptick : Downtick} alt="tick" />
                <p>{Math.abs(priceChange24H) + "%" || "-"}</p>
              </PriceChange24H>
              <MarketCapVsVolume value={marketCapVsVolume}>
                Market Cap vs Volume
                <p>{marketCapVsVolume + "%" || "-"}</p>
                <ProgressBar progress={marketCapVsVolume}>
                  <div></div>
                </ProgressBar>
              </MarketCapVsVolume>
              <CircVsMax value={circVsMax}>
                <div>Circ supply vs max supply</div>
                <p>{circVsMax + "%" || "-"}</p>
                <ProgressBar progress={circVsMax}>
                  <div></div>
                </ProgressBar>
              </CircVsMax>
            </MarketPriceStatistics>
            <YourCoinHeader>Your coin:</YourCoinHeader>
            <YourCoinStatistics>
              <CoinAmt>Coin amount:</CoinAmt>
              <AmtValue>Amount value</AmtValue>
              <AmtPriceChange>
                Amount price change since purchase
              </AmtPriceChange>
              <PurchaseDate>Purchase date</PurchaseDate>
            </YourCoinStatistics>
          </StatisticInfo>
        </CoinContainer>
        <CoinContainer></CoinContainer>
      </StatisticsContainer>
    </StyledPurchasedCoins>
  );
}

export default PurchasedCoins;
