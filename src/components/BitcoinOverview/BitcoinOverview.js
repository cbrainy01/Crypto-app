import React from "react";
import { PriceChart, VolumeChart } from "components";
import {
  ChartContainer,
  ChartWrap,
  StyledBitcoinOverview,
  YourOverview,
} from "./BitcoinOverview.styles";

export function BitcoinOverview(props) {
  return (
    <StyledBitcoinOverview>
      <YourOverview>Your overview</YourOverview>
      <ChartContainer>
        <ChartWrap>
          <PriceChart
            timeSpan={props.timeSpan}
          />
          <VolumeChart
            timeSpan={props.timeSpan}
          />
        </ChartWrap>
      </ChartContainer>
    </StyledBitcoinOverview>
  );
}

export default BitcoinOverview;
