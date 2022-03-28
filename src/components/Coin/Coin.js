import React from "react";
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
  CoinLink,
  Circulation,
  CoinPrice,
  StyledCoin,
  Index,
  ProgressDisplay,
  WeekChange,
  Volume,
  VolumeA,
  VolumeB,
  StyledSparkline,
} from "./Coin.styles";

export function Coin(props) {
  const { index, currency } = props;
  const data = props.coinData;
  const currencySymbol = getCurrencySymbol(currency);
  
  return (
    <StyledCoin>
      <Index>{index}</Index>
      <CoinId>
        <img src={data.image} alt={data.name} />
        <div >
          <CoinLink to={`/coinpage/${data.id}`}>{data.name}({data.symbol})</CoinLink>
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
