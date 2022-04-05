import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getCurrencySymbol, renderPercentChange, formatNumber, formatDateString } from "utils";
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
import { getCoinData } from "store/coinData/actions";
import PurchaseItem from "components/PurchaseItem";

    
// theres gonna be a purchasedCoin component which will map out data for each purchasedcoin
// purchasedCoins.map((coin) => <PurchasedCoin marketPriceData={coin.marketPriceData} yourCoinData={coin.yourCoinData}/>) 

//  purchasedCoinsDisplay structure:
// const purchasedCoinsDisplay = [
//   {
//     displayData: Object,
//     purchaseAmt: "13",
//     purchaseDate: "02-04-2022",
//     purchaseId: "bitcoin + woiwoydf6798y2",
//     marketPriceData: object, (object with data.market_data.market_cap, etc)
//     yourCoinData: object, (response from the historcal data api call),
//   }
// ]
function PurchasedCoins(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const currency = useSelector((state) => state.universalVariables.currency);
  const currencySymbol = getCurrencySymbol(currency);
  const [purchasedCoinsDisplay, setPurchasedCoinsDisplay] = useState([])

  const isLoading = useSelector((state) => state.coinData.isLoading);
  const error = useSelector((state) => state.coinData.error);
  // const data = useSelector((state) => state.coinData.data);
  const purchasedCoinsArray = useSelector((state) => state.portfolioInfo.purchasedCoins)
  console.log("purchasedCoinsDisplay: ", purchasedCoinsDisplay);
  // { 
    // displayData: undefined,
    // purchaseAmt: "13",
    // purchaseDate: "02-04-2022",
    // purchaseId: "bitcoin + woiwoydf6798y2"
// }
  useEffect(() => {
    Promise.all(
        purchasedCoinsArray.map( async(coin) => {
        const coinId = coin.displayData.id;
        const purchaseDate = formatDateString(coin.purchaseDate);
        const {data} = await axios(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
        const response = await axios(`https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${purchaseDate}`)
        const originalPrice = response.data.market_data.current_price[currency];
        return {...coin, "marketPriceData": data, "originalPrice": originalPrice }
      } )
    
    ).then((values) => setPurchasedCoinsDisplay(values))
  }, [purchasedCoinsArray.length])

  const renderPurchaseItems = purchasedCoinsDisplay.map((coinObj) => <PurchaseItem key={uuid()} coinData={coinObj} />)
  
  // const priceChange24H = formatNumber(
  //   data.market_data.price_change_percentage_24h
  // );
  // const marketCapVsVolume = Math.round(
  //   data.market_data.market_cap[currency] /
  //     data.market_data.total_volume[currency]
  // );
  // const circVsMax = Math.round(
  //   data.market_data.circulating_supply / data.market_data.max_supply
  // );

  return (
    <StyledPurchasedCoins>
      <StatisticsContainer>
        <YourStatisticsHeader>Your statistics</YourStatisticsHeader>
        {renderPurchaseItems}
      </StatisticsContainer>
    </StyledPurchasedCoins>
  );
}

export default PurchasedCoins;
