import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { formatDateString } from "utils";
import PurchaseItem from "components/PurchaseItem";
import LoaderComponent from "components/BitcoinOverview/LoaderComponent";
import {
  StatisticsContainer,
  StyledPurchasedCoins,
  YourStatisticsHeader,
} from "./PurchasedCoins.styles";

function PurchasedCoins() {
  const currency = useSelector((state) => state.universalVariables.currency);
  const purchasedCoinsArray = useSelector(
    (state) => state.portfolioInfo.purchasedCoins
  );

  const [purchasedCoinsDisplay, setPurchasedCoinsDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: convert to try catch
  useEffect(() => {
    Promise.all(
      purchasedCoinsArray.map(async (coin) => {
        const coinId = coin.displayData.id;
        const purchaseDate = formatDateString(coin.purchaseDate);
        setIsLoading(true);
        const { data } = await axios(
          `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        );
        const response = await axios(
          `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${purchaseDate}`
        );
        setIsLoading(false);
        const originalPrice = response.data.market_data.current_price[currency];
        return { ...coin, marketPriceData: data, originalPrice: originalPrice };
      })
    ).then((values) => setPurchasedCoinsDisplay(values));
    // add .catch??
  }, [purchasedCoinsArray.length]);

  const renderPurchasedItems = purchasedCoinsDisplay.map((coinObj) => (
    <PurchaseItem key={uuid()} coinData={coinObj} />
  ));

  return (
      <StyledPurchasedCoins>
        {isLoading && <LoaderComponent />}
        <StatisticsContainer>
          <YourStatisticsHeader>Your statistics</YourStatisticsHeader>
          {renderPurchasedItems}
        </StatisticsContainer>
      </StyledPurchasedCoins>
  );
}

export default PurchasedCoins;
