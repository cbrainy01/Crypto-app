import React from 'react'
import { AmtPriceChange, AmtValue, CircVsMax, CoinAmt, CoinContainer, CoinDisplay, CoinId, CoinImgContainer, CoinName, CurrentPrice, MarketCapVsVolume, MarketPriceHeader, MarketPriceStatistics, PriceChange24H, PurchaseDate, StatisticInfo, StatisticsContainer, StyledPurchasedCoins, YourCoinHeader, YourCoinStatistics, YourStatisticsHeader } from './PurchasedCoins.styles'


function PurchasedCoins(props) {
    console.log("props: ", props.data)
  return (
    <StyledPurchasedCoins>
        <StatisticsContainer>
            <YourStatisticsHeader>Your statistics</YourStatisticsHeader>
            <CoinContainer>
                <CoinId>
                    <CoinDisplay>
                        <CoinImgContainer>
                            {/* <img src={} alt={}/> */}
                        </CoinImgContainer>
                        <CoinName>Bitcoinnnnnnnnnnnnn (BTC)</CoinName>
                    </CoinDisplay>
                </CoinId>
                <StatisticInfo>
                    <MarketPriceHeader>Market price:</MarketPriceHeader>
                    <MarketPriceStatistics>
                        <CurrentPrice>Current price:</CurrentPrice>
                        <PriceChange24H>Price change 24h</PriceChange24H>
                        <MarketCapVsVolume>Market Cap vs Volume</MarketCapVsVolume>
                        <CircVsMax>Circ supply vs max supply</CircVsMax>
                    </MarketPriceStatistics>
                    <YourCoinHeader>Your coin:</YourCoinHeader>
                    <YourCoinStatistics>
                        <CoinAmt>Coin amount:</CoinAmt>
                        <AmtValue>Amount value</AmtValue>
                        <AmtPriceChange>Amount price change since purchase</AmtPriceChange>
                        <PurchaseDate>Purchase date</PurchaseDate>
                    </YourCoinStatistics>
                </StatisticInfo>
            </CoinContainer>
            <CoinContainer></CoinContainer>
        </StatisticsContainer>
    </StyledPurchasedCoins>
  )
}

export default PurchasedCoins