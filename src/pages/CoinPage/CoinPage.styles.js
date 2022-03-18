import styled from "styled-components";

export const StyledCoinPage = styled.div`
  margin-top: 40px;
  a:link {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;

export const CoinPageContainer = styled.div`
  padding-left: 150px;
  padding-right: 118px;
`

export const YourSummary = styled.p`
  font-size: 11px;
  margin-bottom: 25px;
`

export const CoinSummary = styled.div`
  // margin-top: 2.6%;
  display: flex;
  flex-flow: row;
  font-size: 9px; 
  // margin-left: 13.4%;
  // margin-right: 12.3%;
  // margin-bottom: 2.6%;
`;

export const SummaryA = styled.div`
  border-radius: 6px;
  width: 129px;
  background : ${(props) => props.theme.main};
  section {
    padding: 18px 36px;
  }
  
  margin-right: 36px;
`;

export const ImgContainer = styled.div`
  margin: 0 auto;
  width: 52px;
  height: 51px;
  background: ${(props) => props.theme.inner};
  padding: 14px;
  margin-bottom: 3px;
  img {
    width: 22x;
    height: 22px;
  }
`
export const CoinName = styled.div`
  font-size: 12px;
  margin: 0 auto;
`

export const SummaryB = styled.div`
  border-radius: 6px;
  width: 232px;
  height: 190px;
  background: ${(props) => props.theme.main};
  section {
    padding: 18px 36px;
  }
  margin-right: 4.4%;
`;

export const SummaryC = styled.div`
  border-radius: 6px;
  width: 273px;
  height: 190px;
  background: ${(props) => props.theme.main};
  section {
    padding: 18px 36px;
  }
  div {
    display: flex;
  }
`;

export const Bar = styled.div`
  width: 49.2%;
  border-radius: 8px;
  height: 0.4%;
  background: blue;
  display: flex;
  overflow: hidden;
  div:nth-child(1) {
    border-radius: 8px;
    background: green;
    width: ${(props) => props.volume}%;
    height: 15px;
    overflow: hidden;
  }

  div:nth-child(2) {
    border-radius: 2px;
    width: ${(props) => props.circulating}%;
    height: 15px;
    background: white;
  }
`;

export const CoinDescription = styled.div`
  margin-top: 2.6%;
  margin-left: 13.5%;
  margin-right: 12.3%;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  div:nth-child(1) {
    margin: 0 auto;
  }
  div {
    padding: 18px 36px;
  }
  a:link {
    color: blue;
    background: ${(props) => props.theme.inner};
  }
`;

export const CoinLinks = styled.div`
  margin-top: 1.4%;
  margin-left: 13.5%;
  margin-right: 12.3%;
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const CoinLink = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  padding: 8px 18px;
  font-size: 15px;
  div {
    height: 15px;
  }
  p {
    margin-right: 4.5%;
  }
  a {
    margin-left: 1.14%;
    margin-right: 4.68%;
  }
  img {
    margin-left: 1.14%;
    margin-right: 4.68%;
    cursor: pointer;
  }
`;