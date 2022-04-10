import styled from "styled-components";

export const StyledPriceChart = styled.div`
  // max-width: 416px;
  // max-height: 225px;
  // max-width: 100%;
  // max-height: 100%;
  width: ${(props) => props.width < 602 ? 416 : props.width / 2.5}px;
  height: ${(props) => props.width < 602 ? 225 : props.height / 2.05}px;
 
  margin-right: 23px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  // flex-shrink: 7;
  // flex-grow: 7;
  // background: yellow;
`;

export const CarouselPriceChart = styled.div`
max-width: 416px;
max-height: 225px;
// max-width: ${(props) => props.width }px;
// max-height: ${(props) => props.height }px;
background: ${(props) => props.theme.main};
border-radius: 5px;
// background: yellow;
`

export const LineChartContainer = styled.div`
  max-width: 326px;
  max-height: 147px;
  // max-width: 100%;
  // max-height: 100%;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  // background: blue;
`;

// export const Wrapper = styled.div`
// width: ${props => props.width}px;
// height: 220px;`;

export const OverviewInfo = styled.div`
  margin-left: 10px;
  margin-top: 8px;
  p {
    font-size: 11px;
  }
  div {
    font-size: 22px;
    font-weight: 700;
  }
  @media (max-width: 588px) {
    // align-self: center;
    margin-left: 35px;
  }
`;


