import React, { useState } from "react";
import { CoinChart } from "components";
import {
  formatNumber,
  getCurrencySymbol,
  renderPercentChange,
  getPercentage,
} from "utils";
import Bullet from "icons/Bullet.svg";
import {
  CirculationA,
  CirculationB,
  HourChange,
  DayChange,
  CoinId,
  Circulation,
  CoinPrice,
  StyledCoin,
  Index,
  TD,
  ProgressDisplay,
  MarketCap,
  WeekChange,
  Volume,
  VolumeA,
  VolumeB,
  Progress,
  StyledSparkline,
} from "./Coin.styles";

export function Coin(props) {
  const handleCoinSelect = () => {
    const selectedCoin = props.coinData.id;
    props.history.push(`/coinpage/${selectedCoin}`);
  };

  const data = props.coinData;
  const index = props.index;
  const currencySymbol = getCurrencySymbol(props.currency);
  return (
    <StyledCoin>
      <Index>{index}</Index>
      <CoinId>
        <img src={data.image} alt={data.name} />
        <div onClick={handleCoinSelect}>
          {data.name}({data.symbol})
        </div>
      </CoinId>
      <CoinPrice>
        {currencySymbol}
        {data.current_price.toString().indexOf(".") == -1
          ? data.current_price
          : data.current_price.toFixed(2)}
      </CoinPrice>
      <HourChange>
        {renderPercentChange(data.price_change_percentage_1h_in_currency) ||
          "-"}
      </HourChange>
      <DayChange>
        {renderPercentChange(data.price_change_percentage_24h_in_currency) ||
          "-"}
      </DayChange>
      <WeekChange>
        {renderPercentChange(data.price_change_percentage_7d_in_currency) ||
          "-"}
      </WeekChange>
      <Volume>
        <section>
          <VolumeA>
            <img src={Bullet} alt="bullet point" />
            <span>{formatNumber(data.total_volume)}</span>
          </VolumeA>
          <VolumeB>
            <img src={Bullet} alt="bullet point" />
            <span>{formatNumber(data.market_cap)}</span>
          </VolumeB>
        </section>

        <section>
          <ProgressDisplay
            percentage={getPercentage(data.total_volume, data.market_cap)}
          >
            <div></div>
          </ProgressDisplay>
        </section>
      </Volume>

      <Circulation>
        <section>
          <CirculationA>
            <img src={Bullet} alt="bullet point" />
            <span>{formatNumber(data.circulating_supply)}</span>
          </CirculationA>
          <CirculationB>
            <img src={Bullet} alt="bullet point" />
            <span>{formatNumber(data.total_supply)}</span>
          </CirculationB>
        </section>
        <section>
          <ProgressDisplay
            percentage={getPercentage(
              data.circulating_supply,
              data.total_supply
            )}
          >
            <div></div>
          </ProgressDisplay>
        </section>
      </Circulation>
      <StyledSparkline>
        <CoinChart prices={data["sparkline_in_7d"].price.slice().reverse()} />
      </StyledSparkline>
    </StyledCoin>
  );
}

export default Coin;
