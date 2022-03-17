import styled from "styled-components";

export const StyledNavbarGlobal = styled.div`
  padding-left: 251px;
  padding-right: 246px;
  font-size: 8px;
`;

export const NavbarGlobalContainer = styled.div`
  width: 100%;
  height: 27px;
  padding-left: 26px;
  padding-right: 26px;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 0px 0px 6px 6px;
  margin: 0 auto;
  overflow: hidden;

`;

export const MarketData1 = styled.div`
  margin-right: 21px;
  display: flex;
  justify-content: space-evenly;
  width: 48px;
  font-weight: 600;
`;

export const MarketData2 = styled.div`
  width: 58px;
  margin-right: 10px;
  display: flex;
  justify-content: space-evenly;
  font-weight: 600;
`;

export const MarketData3 = styled.div`
    width: 41px;
    margin-right: 10px;
    display: flex;

    img:nth-child(1) {
        width: 4px;
        height: 4px;
        margin: auto 6px auto 0;
    }
  
    img:last-child {
        width: 6px;
        height: 2px;
        margin auto 0px auto 3px;
    }

`;

export const MarketData4 = styled.div`
  width: 78px;
  margin-right: 10px;
  display: flex;
  flex-flow: row;
  align-items: center;
  img {
    width: 4px;
    height: 4px;
    margin: auto 6px auto 0;
  }
  div:nth-child(2) {
    margin-right: 3px;
  }
`;

export const MarketData5 = styled.div`
  width: 56px;
  margin-right: 12px;
  display: flex;
  flex-flow: row;
  align-items: center;
  img {
    width: 7px;
    height: 7px;
    margin: auto 2px auto 0;
  }
  div:nth-child(2) {
    margin-right: 2px;
  }
`;

export const MarketData6 = styled.div`
  width: 52px;
  display: flex;
  flex-flow: row;
  align-items: center;
  img {
    width: 6px;
    height: 7px;
    margin: auto 2px auto 0;
  }
  div:nth-child(2) {
    margin-right: 2px;
  }
`;

export const ProgressBar = styled.div`
  width: 27px;
  height: 6px;
  border-radius: 10px;
  overflow: hidden;
  background: #2172e5;
  div {
    width: ${(props) => props.percentage}%;
    height: 6px;
    background: ${(props) => props.theme.color};
  }
`;
