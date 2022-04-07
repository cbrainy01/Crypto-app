import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCoin = styled.div`
  display: flex;
  // width: 100%;
  // width: 578px;
  // width: 700px;
  flex-flow: row;
  align-items: center;
  // justify-content: safe-space;
  // gap: 15px;
  color: ${(props) => props.theme.color};
  border-bottom: 1px solid #707070;
  height: 75px;
  font-size: 11px;
  //background: orange;
  // overflow: scroll;
  width: 856px;

`;

export const Index = styled.span`
  // margin-right: 10px;
  width: 30px;
  // width: 100%;
  text-align: center;
  //background: grey;

`;

export const CoinId = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 154px;
  // width: 100%;
  //background: pink;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const CoinLink = styled(Link)`
  cursor: pointer;
  width: 75px;
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const CoinPrice = styled.span`
  width: 66px;
  //background: yellow;

`;

export const HourChange = styled.div`
  width: 62px;
  //background: blue;

  div {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  img {
    margin: auto 0;
    height: 2px;
    width: 6px;
  }
`;

export const Barr = styled.div`
  width: 312px;
  height: 8px;
  background: blue;
  border-radius: 5px;
`;

export const DayChange = styled.div`
  width: 70px;
  // background: green;

  div {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  img {
    margin: auto 0;
    height: 2px;
    width: 6px;
  }
`;

export const WeekChange = styled.div`
  width: 63px;
  // background: purple;

  div {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  img {
    margin: auto 0;
    height: 2px;
    width: 6px;
  }
`;

export const ProgressDisplay = styled.div`
  width: 156px;
  height: 8px;
  background: blue;
  border-radius: 7px;
  overflow: hidden;
  div:nth-child(1) {
    background: pink;
    position: relative;
    border-radius: 7px;
    width: ${(props) => props.percentage}%;
    height: 8px;
  }
`;

export const Progress = styled.div`
  background: pink;
  width: 300px;
  height: 8px;
`;

export const Volume = styled.div`
  width: 156px;
  //background: turquoise;

  margin-right: 21px;
  section:nth-child(1) {
    display: flex;
  }

  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 1px;
    height: 4px;
    width: 4px;
  }
`;

export const VolumeA = styled.div`
  width: 50%;
  span {
    margin-left: 4px;
  }
`;

export const VolumeB = styled.div`
  width: 50%;
  text-align: right;
  span {
    margin-left: 4px;
  }
`;

export const Circulation = styled.div`
  width: 156px;
  //background: lime;
  margin-right: 16px;
  section:nth-child(1) {
    display: flex;
  }

  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 1px;
    height: 4px;
    width: 4px;
  }
`;

export const CirculationA = styled.div`
  width: 50%;
  span {
    margin-left: 4px;
  }
`;

export const CirculationB = styled.div`
  width: 50%;
  text-align: right;
  span {
    margin-left: 4px;
  }
`;

export const StyledSparkline = styled.div`
  width: 75px;
  text-align: center;
  padding-right: 10px;
  //background: brown;

`;
