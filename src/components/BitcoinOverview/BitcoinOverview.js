import React from "react";
import { PriceChart, VolumeChart } from "components";
import { StyledBitcoinOverview } from "./BitcoinOverview.styles";

export function BitcoinOverview(props) {
  return (
    <StyledBitcoinOverview>
      <PriceChart
        currency={props.currency.toString()}
        timeSpan={props.timeSpan}
      />
      <VolumeChart
        currency={props.currency.toString()}
        timeSpan={props.timeSpan}
      />
    </StyledBitcoinOverview>
  );
}

export default BitcoinOverview;
