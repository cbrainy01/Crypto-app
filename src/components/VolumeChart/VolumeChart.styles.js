import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const CarouselComponent = styled(Carousel)`
  button {
    background: #00FF5F;
  }
  height: 250px;
  margin-bottom: 50px;
  flex-shrink: 2;
`;

export const StyledVolumeChart = styled.div`
  width: ${(props) => (props.width < 602 ? 416 : props.width / 2.5)}px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
`;

export const CarouselVolumeChart = styled.div`
  max-width: 416px;
  max-height: 225px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
`;

export const BarChartContainer = styled.div`
  max-width: 326px;
  max-height: 147px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
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
    margin-left: 35px;
  }
`;
