import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { getPreviousHours } from "utils";
import CurrencyExchange from "components/CurrencyExchange";
import {
  RadioButton,
  RadioContainer,
  StyledCoinPageChart,
  RadioLabel,
  RadioWrap,
} from "./CoinPageChart.styles";

export function CoinPageChart(props) {
  const { data } = props;

  const [timespan, setTimespan] = useState(24);

  const lineData = data.slice(-timespan);
  const labels = getPreviousHours(timespan).reverse();

  const handleTimespanChange = (e) => {
    setTimespan(e.target.value);
  };

  return (
    <StyledCoinPageChart>
      <RadioContainer>
        <RadioWrap>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 12}
            value={12}
            name="12h"
          />
          <div></div><p>12h</p>
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 24}
            value={24}
            name="1d"
          />
          <div></div><p>1d</p>
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 72}
            value={72}
            name="3d"
          />
          <div></div><p>3d</p>
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 120}
            value={120}
            name="5d"
          />
          <div></div><p>5d</p>
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 168}
            value={168}
            name="7d"
          />
          <div></div><p>7d</p>
        </RadioLabel>
        </RadioWrap>
      </RadioContainer>
      <CurrencyExchange
            coin={props.coin}
            currentPrice={props.currentPrice}
            currency={props.currency}
          />
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              data: lineData,
              borderColor: "grey",
            },
          ],
        }}
        
        options={{
          elements: {
            point: { radius: 0 },
          },
          scales: {
            y: {
              display: false,
              grid: {
                display: false,
              },
              ticks: {
                callback: function (value, index, ticks) {
                  return;
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                callback: function (val, index) {
                  return;
                },
              },
            },
          },
          plugins: {
            legend: { display: false },
          },
        }}
      />
    </StyledCoinPageChart>
  );
}

export default CoinPageChart;
