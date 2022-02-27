import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import queryString from "query-string";
import axios from 'axios'
import { Coin } from "components"
import { reduceSparkline } from 'utils';
import topDownArrow from "icons/topDownArrow.svg"
import ArrowDown from "icons/ArrowDown.svg"
import ArrowLeft from "icons/ArrowLeft.svg"
import ArrowRight from "icons/ArrowRight.svg"
import TornadoSort from "icons/TornadoSort.svg"
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


export class Coins extends React.Component {
  state = {
    isLoading: false,
    error: null,
    coinsData: null,
    sortDirection: "desc",
    sortType: "volume",
    hasMore: true,
    currentPage: 1,
  };

  sortCoins = () => {
    const { sortType, coinsData } = this.state;
    if (this.state.ascSort === "asc") {
      return coinsData.sort((a, b) => a[sortType] - b[sortType]);
    } else if (this.state.ascSort === "desc") {
      return coinsData.sort((a, b) => b[sortType] - a[sortType]);
    } else {
      return coinsData;
    }
  };

  getCoins = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${this.state.currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const updatedData = reduceSparkline(data);
      if (!this.state.coinsData) {
        this.setState({
          coinsData: updatedData,
          currentPage: this.state.currentPage + 1,
        });
      } else {
        this.setState({
          coinsData: this.state.coinsData.concat(updatedData),
          currentPage: this.state.currentPage + 1,
        });
      }
      return data;
    } catch (error) {
      this.setState({ isLoading: false, error: error });
    }
  };

  componentDidMount() {
    this.getCoins();
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.currency !== prevProps.currency) {
        this.getCoins()
    }
  }

  fetchMoreCoins = () => {
    if (this.state.coinsData?.length > 30) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      console.log("getting more coins");
      const response = this.getCoins();
    }, 500);
  };

  handleSortChange = (e) => {
    const att = e.target.getAttribute("data-value");
    this.setState({ sortType: att });
  };

  render() {
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
                    onClick={this.handleSortChange}
                    src={TornadoSort}
                    alt="sortbutton"
                    data-value={"name"}
                  />
                </TH>
                <TH>
                  <span>Price</span>
                  <img
                    onClick={this.handleSortChange}
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
                dataLength={
                  this.state.coinsData ? this.state.coinsData.length : 10
                }
                next={this.fetchMoreCoins}
                hasMore={this.state.hasMore}
                loader={<h3>Loading...</h3>}
                endMessage={<p>Thats all Folks!</p>}
              >
                {this.state.coinsData?.map((coinData, index) => (
                  <Coin
                    key={`${coinData.id} +${Math.random(20)}`}
                    {...this.props}
                    coinData={coinData}
                    index={index + 1}
                    currency={this.props.currency}
                  />
                ))}
              </InfiniteScroll>
            </TableBody>
          </StyledTable>
        </CoinsContainer>
      </StyledCoins>
    );
  }
}

export default Coins