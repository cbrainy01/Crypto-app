import styled from "styled-components";

export const StyledVolumeChart = styled.div`
  width: 416px;
  height: 225px;
  background: ${(props) => props.theme.main};
  border-radius: 5px;
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
`;

export const BarChartContainer = styled.div`
  width: 326px;
  height: 147px;
  margin-left: 30px;
  margin-right: 50px;
  margin-bottom: 20px;
`;
