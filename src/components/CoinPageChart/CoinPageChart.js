import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { getPreviousHours } from "utils";
import {
  RadioButton,
  RadioContainer,
  StyledCoinPageChart,
  RadioLabel,
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
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 12}
            value={12}
            name="12h"
          />
          <div></div>12h
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 24}
            value={24}
            name="1d"
          />
          <div></div>1d
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 72}
            value={72}
            name="3d"
          />
          <div></div>3d
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 120}
            value={120}
            name="5d"
          />
          <div></div>5d
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            onChange={handleTimespanChange}
            type="radio"
            checked={timespan == 168}
            value={168}
            name="7d"
          />
          <div></div>7d
        </RadioLabel>
      </RadioContainer>
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
            point: { radius: 3, backgroundColor: "limegreen" },
          },
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
