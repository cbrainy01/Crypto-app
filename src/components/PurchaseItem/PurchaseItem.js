import React from "react";
import { getCurrencySymbol, formatNumber, getAmtValue } from "utils";
import { useSelector, useDispatch } from "react-redux";
import Uptick from "icons/Uptick.svg";
import Downtick from "icons/Downtick.svg";
import Cross from "icons/Cross.svg";
import { removePurchasedCoin } from "store/portfolioInfo/actions";
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
  RemoveCoin,
  RedCross,
  YourCoinHeader,
  YourCoinStatistics,
} from "./PurchaseItem.styles";

function PurchaseItem(props) {
  const dispatch = useDispatch();
  const { coinData } = props;
  const data = coinData.marketPriceData;

  const currency = useSelector((state) => state.universalVariables.currency);
  const currencySymbol = getCurrencySymbol(currency);

  const priceChange24H = formatNumber(
    data?.market_data.price_change_percentage_24h
  );
  const marketCapVsVolume = Math.round(
    data?.market_data.market_cap[currency] /
      data?.market_data.total_volume[currency]
  );
  const circVsMax = Math.round(
    data?.market_data.circulating_supply / data?.market_data.max_supply
  );

  const { originalPrice, purchaseDate, purchaseId } = coinData;
  const purchaseAmt = parseInt(coinData.purchaseAmt, 10);
  const currentPrice = data?.market_data.current_price[currency];
  const pctChangeSincePurchase =
    ((currentPrice - originalPrice) / originalPrice) * 100;

  function handleCoinDelete() {
    dispatch(removePurchasedCoin(purchaseId));
  }

  return (
    <CoinContainer>
      <CoinId>
        <CoinDisplay>
          <CoinImgContainer>
            <img src={data?.image.small} alt={data?.name} />
          </CoinImgContainer>
          <CoinName>
            {data?.name} ({data?.symbol.toUpperCase()})
          </CoinName>
          <RemoveCoin>
            <RedCross
              onClick={handleCoinDelete}
              src={Cross}
              alt="close button"
            />
          </RemoveCoin>
        </CoinDisplay>
      </CoinId>
      <StatisticInfo>
        <MarketPriceHeader>Market price: </MarketPriceHeader>
        <MarketPriceStatistics>
          <CurrentPrice>
            Current price:
            <p>
              {currencySymbol}
              {currentPrice}
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
          <CoinAmt>Coin amount: {purchaseAmt}</CoinAmt>
          <AmtValue>
            Amount value: {currencySymbol}
            {getAmtValue(pctChangeSincePurchase, originalPrice, purchaseAmt)}
          </AmtValue>
          <AmtPriceChange value={pctChangeSincePurchase}>
            Amount price change since purchase:{" "}
            <span>{pctChangeSincePurchase.toFixed(3)}%</span>
          </AmtPriceChange>
          <PurchaseDate>Purchase date: {purchaseDate}</PurchaseDate>
        </YourCoinStatistics>
      </StatisticInfo>
    </CoinContainer>
  );
}

export default PurchaseItem;
