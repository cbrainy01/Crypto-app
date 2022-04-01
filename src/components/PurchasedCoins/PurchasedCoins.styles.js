import styled from "styled-components";

export const StyledPurchasedCoins = styled.div``

export const StatisticsContainer = styled.div`
    width: 857px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    background: pink;
`

export const YourStatisticsHeader = styled.div`
    width: 100%;
    display: flex;
    background: red;
    margin-bottom: 25px;
    justify-content: start;
   
`

export const CoinContainer = styled.div`
    width: 100%;
    height: 148px;
    margin-bottom: 18px;
    background: ${(props) => props.theme.main};
    display: flex;
    gap: 12px;
      @media(max-width: 768px) {
        display: flex;

        flex-direction: column;
        // padding-top: 20px;
        // text-align: center;
    }
`

export const CoinId = styled.div`
    width: 130px;
    background: gold;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const CoinDisplay = styled.div`
background: purple;
width: 80px;
height: 80px;
// display: flex;
// flex-wrap: column;
`

export const CoinImgContainer = styled.div`
    width: 52px;
    height: 52px;
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 4px;
`

export const CoinName = styled.div`
    font-size: 12px;
    overflow-wrap: break-word;
`

export const StatisticInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 715px;
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        // padding-top: 20px;
        // text-align: center;
    }
`

export const MarketPriceHeader = styled.div`
    font-size: 9px;
    margin-bottom: 6px;
`
export const MarketPriceStatistics = styled.div`
height: 50px;    
width: 100%;
background: green;
margin-bottom: 9px;
border-radius: 6px;
font-size: 10px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const CurrentPrice = styled.div``
export const PriceChange24H = styled.div``
export const MarketCapVsVolume = styled.div``
export const CircVsMax = styled.div``

export const YourCoinHeader = styled.div`
    font-size: 9px;
    margin-bottom: 6px;
`
export const YourCoinStatistics = styled.div`
height: 50px;
width: 100%;
background: orange;
margin-bottom: 9px;
border-radius: 6px;
font-size: 10px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const CoinAmt = styled.div``
export const AmtValue = styled.div``
export const AmtPriceChange = styled.div``
export const PurchaseDate = styled.div``


