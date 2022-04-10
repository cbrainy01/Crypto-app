import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const CarouselComponent = styled(Carousel)`
  button {
    background: green;
    // height: 10px;
    // width: 10px;
  }
  height: 250px;
  margin-bottom: 50px;
  flex-shrink: 2;
  // background: white;
  // @media (max-width: 588px) {
  //   display: none;
  // }
`

export const StyledVolumeChart = styled.div`
  // max-width: 416px;
  // max-height: 225px;
  // max-width: 100%;
  // max-height: 100%;
  width: ${(props) => props.width < 602 ? 416 : props.width / 2.5}px;
  height: ${(props) => props.width < 602 ? 225 : props.height / 2.05}px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  // background: teal;
  // flex-shrink: 7;
  // flex-grow: 7;
`;

export const CarouselVolumeChart = styled.div`
  max-width: 416px;
  max-height: 225px;
  // max-width: ${(props) => props.width }px;
  // max-height: ${(props) => props.height }px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  // background: teal;
`

export const BarChartContainer = styled.div`
  max-width: 326px;
  max-height: 147px;

  // width: ${(props) => props.width < 602 ? 416 : props.width / 2.5}px;
  // height: ${(props) => props.width < 602 ? 225 : props.height / 2.2}px;
  

  // max-width: 100%;
  // max-height: 100%;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  // background: orange;
`;

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


