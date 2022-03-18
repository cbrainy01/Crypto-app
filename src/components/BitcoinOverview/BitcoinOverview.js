import React from "react";
import { PriceChart, VolumeChart } from "components";
import { ChartContainer, StyledBitcoinOverview, YourOverview } from "./BitcoinOverview.styles";

export function BitcoinOverview(props) {
  return (
    <StyledBitcoinOverview>
      <YourOverview>Your overview</YourOverview>
      <ChartContainer>
        <PriceChart
          currency={props.currency.toString()}
          timeSpan={props.timeSpan}
        />
        <VolumeChart
          currency={props.currency.toString()}
          timeSpan={props.timeSpan}
        />
      </ChartContainer>
    </StyledBitcoinOverview>
  );
}

export default BitcoinOverview;
