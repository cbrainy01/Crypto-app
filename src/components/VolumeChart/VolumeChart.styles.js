import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const CarouselComponent = styled(Carousel)`
  button {
    background: #00FF5F;
  }
`;

export const StyledVolumeChart = styled.div`
  width: calc(50% - 12px);
  margin-left: 12px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  flex: 1;
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
  align-self: start;
`;

export const CarouselVolumeChart = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  @media (max-width: 602px) {
    background: ${(props) => props.theme.inner};
    width: 100%;
  }
`;

export const BarChartContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  padding-bottom: 12px;
`;