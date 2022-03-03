import styled from "styled-components";

export const StyledCoinPage = styled.div`
  margin-top: 4.1%;
  a:link {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
  h1 {
    margin-left: 13.4%;
  }
`;

export const CoinSummary = styled.div`
  margin-top: 2.6%;
  display: flex;
  margin-left: 13.4%;
  margin-right: 12.3%;
  margin-bottom: 2.6%;
`;

export const SummaryA = styled.div`
  border-radius: 12px;
  background: ${(props) => props.theme.main};
  section {
    padding: 18px 36px;
  }
  margin-right: 3.8%;
`;

export const SummaryB = styled.div`
  border-radius: 12px;
  background: ${(props) => props.theme.main};
  section {
    padding: 18px 36px;
  }
  margin-right: 4.4%;
`;

export const SummaryC = styled.div`
  border-radius: 12px;
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