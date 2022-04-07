import styled from "styled-components";

export const StyledPurchasedCoins = styled.div`
`;

export const StatisticsContainer = styled.div`
  max-width: 857px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: ${(props) => props.theme.color};
  flex-wrap: wrap;
`;

export const YourStatisticsHeader = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: start;
`;