import styled from "styled-components";

export const StyledPriceChart = styled.div`
  width: ${(props) => (props.width < 602 ? 416 : props.width / 2.5)}px;
  margin-right: 23px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 2;
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

export const CarouselPriceChart = styled.div`
  max-width: 416px;
  max-height: 250px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  @media (max-width: 602px) {
    background: ${(props) => props.theme.inner};
    width: 100%;
  }
`;

export const LineChartContainer = styled.div`
  max-width: 326px;
  max-height: 160px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 12px;
`;

