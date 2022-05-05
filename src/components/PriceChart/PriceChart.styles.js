import styled from "styled-components";

export const StyledPriceChart = styled.div`
  width: calc(50% - 12px);
  margin-right: 12px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OverviewInfo = styled.div`
  padding-left: 10px;
  padding-top: 8px;
  p {
    font-size: 11px;
  }
  div {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const CarouselPriceChart = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 5px;
  @media (max-width: 602px) {
    background: ${(props) => props.theme.inner};
    width: 100%;
  }
`;

export const LineChartContainer = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 12px;
`;

