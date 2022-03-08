import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import queryString from "query-string";
import axios from "axios";
import { Coin } from "components";
import { reduceSparkline } from "utils";
import topDownArrow from "icons/topDownArrow.svg";
import ArrowDown from "icons/ArrowDown.svg";
import ArrowLeft from "icons/ArrowLeft.svg";
import ArrowRight from "icons/ArrowRight.svg";
import TornadoSort from "icons/TornadoSort.svg";
import {
  StyledCoins,
  SortingContainer,
  CoinsContainer,
  SortControl,
  DisplayCountControl,
  RankingSort,
  SortBy,
  StyledTable,
  TableHead,
  TableBody,
  TH,
  TR,
} from "./Coins.styles";

export function Coins(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coinsData, setCoinsData] = useState(null);
  const [sortDirection, setSortDirection] = useState("desc");
  const [sortType, setSortType] = useState("volume");
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const sortCoins = () => {
    if (sortDirection === "asc") {
      return coinsData.sort((a, b) => a[sortType] - b[sortType]);
    } else if (sortDirection === "desc") {
      return coinsData.sort((a, b) => b[sortType] - a[sortType]);
    } else {
      return coinsData;
    }
  };

  const getCoins = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const updatedData = reduceSparkline(data);
      if (!coinsData) {
        setCoinsData(updatedData);
        setCurrentPage(currentPage + 1);
        setIsLoading(false);
      } else {
        setCoinsData(coinsData.concat(updatedData));
        setCurrentPage(currentPage + 1);
        setIsLoading(false);
      }
      return data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getCoins();
  }, [props.currency]);

  const fetchMoreCoins = () => {
    if (coinsData?.length > 30) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const response = getCoins();
    }, 500);
  };

  const handleSortChange = (e) => {
    const att = e.target.getAttribute("data-value");
    setSortType(att);
  };

  return (
    <StyledCoins>
      <SortingContainer>
        <SortControl>
          <img src={topDownArrow} alt="ethereum" />
          <RankingSort>Top/bot #</RankingSort>
          <SortBy>By Volume</SortBy>
          <img src={ArrowDown} alt="arrowdown" />
        </SortControl>
        <DisplayCountControl>
          <div>Show: /select tag/</div>
          <div>PAGE</div>
          <img src={ArrowLeft} />
          <div>/current page/</div>
          <img src={ArrowRight} />
        </DisplayCountControl>
      </SortingContainer>
      <CoinsContainer>
        <StyledTable>
          <TableHead>
            <TR>
              <TH>#</TH>
              <TH>
                <span>Name</span>
                <img
                  onClick={handleSortChange}
                  src={TornadoSort}
                  alt="sortbutton"
                  data-value={"name"}
                />
              </TH>
              <TH>
                <span>Price</span>
                <img
                  onClick={handleSortChange}
                  src={TornadoSort}
                  alt="sortbutton"
                  data-value={"current_price"}
                />
              </TH>
              <TH>
                <span>1h</span> <img src={TornadoSort} alt="sortbutton" />
              </TH>
              <TH>
                <span>24h</span> <img src={TornadoSort} alt="sortbutton" />
              </TH>
              <TH>
                <span>7d</span> <img src={TornadoSort} alt="sortbutton" />
              </TH>
              <TH>24h Vol / Market Cap</TH>
              <TH>Circulating /Total Sup</TH>
              <TH>Last 7d</TH>
            </TR>
          </TableHead>
          <TableBody>
            <InfiniteScroll
              dataLength={coinsData ? coinsData.length : 10}
              next={fetchMoreCoins}
              hasMore={hasMore}
              loader={<h3>Loading...</h3>}
              endMessage={<p>Thats all Folks!</p>}
            >
              {coinsData?.map((coinData, index) => (
                <Coin
                  key={`${coinData.id} +${Math.random(20)}`}
                  {...props}
                  coinData={coinData}
                  index={index + 1}
                  currency={props.currency}
                />
              ))}
            </InfiniteScroll>
          </TableBody>
        </StyledTable>
      </CoinsContainer>
    </StyledCoins>
  );
}

export default Coins;
