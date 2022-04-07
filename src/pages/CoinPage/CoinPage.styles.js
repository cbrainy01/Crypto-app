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
`;

export const YourSummary = styled.p`
  width: 100%;
  display: flex;
  justify-content: left;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const CoinSummary = styled.div`
  display: flex;
  flex-flow: row;
  font-size: 9px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const SummaryWrap = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
`
export const SummaryA = styled.div`
  margin-right: 36px;
`;
export const SummaryATop = styled.div`
  height: 147px;
  width: 129px;
  background: ${(props) => props.theme.main};
  border-radius: 6px;
  padding: 18px 36px;
`;
export const SummaryABottom = styled.div`
  height: 32px;
  width: 129px;
  border-radius: 6px;
  background: ${(props) => props.theme.main};
  margin-top: 10px;
  padding: 11px 36px;
  padding-left: 11px;
  padding-right: 11px;
  img {
    height: 6px;
    width: 6px;
    margin-right: 17px;
  }
`;

export const ImgContainer = styled.div`
  margin: 0 auto;
  width: 52px;
  height: 51px;
  border-radius: 4px;
  background: ${(props) => props.theme.inner};
  padding: 14px;
  margin-bottom: 3px;
  img {
    width: 22x;
    height: 22px;
  }
`;
export const CoinName = styled.div`
  font-size: 12px;
  margin: 0 auto;
`;

export const SummaryB = styled.div`
  border-radius: 6px;
  width: 232px;
  height: 190px;
  padding-top: 17px;
  padding-bottom: 21px;
  padding-left: 45px;
  padding-right: 41px;
  background: ${(props) => props.theme.main};
  margin-right: 4.4%;
`;

export const BPrice = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  div:nth-child(1) {
    font-size: 22px;
    font-weight: 800;
  }
`;

export const PercentChange = styled.div`
  display: flex;
  margin: auto 0 auto 7px;
  color: ${(props) => props.color};
  font-size: 8p;
  img {
    height: 2px;
    width: 6px;
    margin: auto 0;
    margin-right: 2px;
  }
`;

export const Profit = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  font-size: 9px;
  margin-bottom: 12px;

  p {
    font-weight: 600;
  }
  span {
    color: ${(props) => props.color};
    margin-left: 2px;
  }
`;
export const StackWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 13px;
  img {
    height: 11px;
    width: 11px;
  }
  div {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ATH = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 18px;
  font-size: 9px;
  img {
    margin: auto 6px auto 0;
    height: 10px;
    width: 4px;
  }
  p:nth-child(1) {
    margin-bottom: 1px;
  }
`;

export const ATL = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  font-size: 9px;
  img {
    margin: auto 6px auto 0;
    height: 10px;
    width: 4px;
  }
  p:nth-child(1) {
    margin-bottom: 1px;
  }
`;

export const SummaryC = styled.div`
  border-radius: 6px;
  width: 273px;
  height: 190px;
  background: ${(props) => props.theme.main};
  section {
    padding: 14px 24px 17px 24px;
  }
  img {
    height: 12px;
    width: 12px;
    margin-right: 7px;
  }
`;

export const SummaryCTop = styled.div`
  margin-bottom: 15px;
  div {
    display: flex;
    justify-content: left;
    margin-bottom: 6px;
  }
  p {
    margin-right: 1.5px;
  }
  span {
    font-weight: 600;
    margin-right: 1.5px;
  }
`;

export const SummaryCBottom = styled.div`
  div {
    display: flex;
    justify-content: left;
    margin-bottom: 6px;
  }
  p {
    margin-right: 1.5px;
  }
  span {
    font-weight: 600;
    margin-right: 1.5px;
  }
`;

export const Bar = styled.div`
  width: 135px;
  border-radius: 8px;
  height: 4px;
  background: #b54124;
  display: flex;
  overflow: hidden;
  div:nth-child(1) {
    border-radius: 8px;
    background: #fee158;
    width: ${(props) => props.volume}%;
    height: 4px;
    overflow: hidden;
  }

  div:nth-child(2) {
    border-radius: 2px;
    width: ${(props) => props.circulating}%;
    height: 4px;
    background: #fe8c01;
  }
`;

export const BarContainer = styled.div`
  margin-top: 6px;
  section {
    display: flex;
    padding: 0;
  }
  img {
    margin: auto 4px auto 0;
    height: 4px;
    width: 4px;
  }
`;
export const LeftPct = styled.div`
  display: flex;
  width: 50%;
  justify-content: left;
  color: #fee158;
`;
export const RightPct = styled.div`
  display: flex;
  width: 50%
  align-items: right;
  color: #FE8C01;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const CoinDescription = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  div:nth-child(1) {
    margin: 0 auto;
  }
  div {
    padding: 0px 36px 25px 36px;
  }
  a:link {
    color: blue;
    background: ${(props) => props.theme.inner};
  }
  img {
    margin-top: 15px;
  }
`;

export const Description = styled.div`
  font-size: 11px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const LinksContainer = styled.div`
  padding-left: 150px;
  padding-right: 118px;
`;

export const CoinLinks = styled.div`
  margin-top: 14px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const CoinLink = styled.div`
  display: flex;
  justify-content: center;
  min-width: 230px;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  padding: 10px 8px 10px 11px;
  margin-right: 10px;

  font-size: 7px;
  div {
    height: 32px;
  }
  p {
    margin: auto 2px;
  }
  a {
    margin: auto 0;
  }
  a img {
    height: 6px;
    width: 6px;
  }
  img {
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: auto 0;
  }
`;
