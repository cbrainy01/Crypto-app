import React from "react";
import { PriceChart, VolumeChart } from "components";
import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import { CarouselComponent } from "components/VolumeChart/VolumeChart.styles";
import { useWindowSize } from "@react-hook/window-size/throttled";
import {
  ChartContainer,
  ChartWrap,
  StyledBitcoinOverview,
  YourOverview,
} from "./BitcoinOverview.styles";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 2 },
];

export function BitcoinOverview() {
  const [width, height] = useWindowSize({ fps: 60 });
  const timeSpan = useSelector((state) => state.universalVariables.timeSpan)
  
  return (
    <StyledBitcoinOverview>
      <YourOverview>Your overview</YourOverview>
      <ChartContainer>
        {width > 602 ?
      <>
      <PriceChart
            timeSpan={timeSpan}
          />
          <VolumeChart
            timeSpan={timeSpan}
          />
      </>
      :
          <CarouselComponent breakPoints={breakPoints}>
          <PriceChart
            timeSpan={timeSpan}
          />
          <VolumeChart
            timeSpan={timeSpan}
          />
          </CarouselComponent>
      
      }
      </ChartContainer>
    </StyledBitcoinOverview>
  );
}

export default BitcoinOverview;
