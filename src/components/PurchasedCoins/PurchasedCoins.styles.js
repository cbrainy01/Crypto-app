import styled from "styled-components";
import SVG from "react-inlinesvg";

export const RedCross = styled(SVG)`
  cursor: pointer;
  height: 17px;
  width: 17px;
  & path {
    fill: red;
  }
  margin-bottom: 3px;
`

export const StyledPurchasedCoins = styled.div`
`;

export const StatisticsContainer = styled.div`
  max-width: 857px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  // background: pink;
  color: ${(props) => props.theme.color};
  flex-wrap: wrap;
`;

export const YourStatisticsHeader = styled.div`
  display: flex;
  // background: red;
  margin-bottom: 25px;
  justify-content: start;
`;

export const CoinContainer = styled.div`
  width: 100%;
  margin-bottom: 18px;
  background: ${(props) => props.theme.inner};
  display: flex;
  gap: 12px;
  // @media (max-width: 292px) {
  //   flex-direction: column;
  // }
  @media (max-width: 588px) {
    flex-direction: column;
  }
`;

export const CoinId = styled.div`
  width: 130px;
  // background: gold;
  background: ${(props) => props.theme.main};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 588px) {
    width: 100%;
  }
`;

export const CoinDisplay = styled.div`
  // background: purple;
  width: 80px;
  // height: 80px;
`;

export const CoinImgContainer = styled.div`
  width: 52px;
  height: 52px;
  background: ${(props) => props.theme.inner};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 4px;
  flex-wrap: wrap;
  img {
    height: 22px;
    width: 22px;
  }
`;

export const CoinName = styled.div`
  font-size: 12px;
  overflow-wrap: break-word;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const RemoveCoin = styled.div`
display: flex;
justify-content: center;  
// img {
//     height: 19px;
//     width: 19px;
//   }
`

export const StatisticInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MarketPriceHeader = styled.div`
  font-size: 9px;
  margin-bottom: 6px;
`;
export const MarketPriceStatistics = styled.div`
  height: 50px;
  width: 100%;
  background: ${(props) => props.theme.main};
  margin-bottom: 9px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 292px) {
    flex-direction: column;
  }
`;

export const CurrentPrice = styled.div`
  display: flex;
  gap: 4px;
`;
export const PriceChange24H = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 5px;
    height: 3px;
    width: 6px;
  }
  p {
    color: ${(props) => (props.value >= 0 ? "#06D554" : "red")};
  }
`;
export const MarketCapVsVolume = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    color: ${(props) => (props.value >= 0 ? "#06D554" : "red")};
  }
`;
export const CircVsMax = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
    // @media (max-width: 198px) {
    //     display: flex;
    //     flex-direction: column;
    //     flex-wrap: wrap;
    //     div {
    //         overflow-wrap: break-word;
    //     }
    // }
  p {
    color: ${(props) => (props.value >= 0 ? "#06D554" : "red")};
  }
`;

export const YourCoinHeader = styled.div`
  font-size: 9px;
  margin-bottom: 6px;
`;
export const YourCoinStatistics = styled.div`
  height: 50px;
  width: 100%;
  // background: orange;
  background: ${(props) => props.theme.main};
  // margin-bottom: 9px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 292px) {
    flex-direction: column;
  }
`;

export const CoinAmt = styled.div``;
export const AmtValue = styled.div``;
export const AmtPriceChange = styled.div`

  span {
  color: ${(props) => props.value >= 0 ? "#06d554" : "red" };
  }
  `;
export const PurchaseDate = styled.div``;

export const ProgressBar = styled.div`
  width: 28px;
  height: 7px;
  background: #06d554;
  overflow: hidden;
  border-radius: 3px;
  div {
    width: ${(props) => props.progress}%;
    height: 7px;
    background: ${(props) => props.theme.color};
    border-radius: 3px;
  }
`;
