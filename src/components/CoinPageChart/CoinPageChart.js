import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { StyledCoinPageChart } from "./CoinPageChart.styles";

export function CoinPageChart(props) {
  const { data } = props;

  const [timespan, setTimespan] = useState(24);

  const lineData = data.slice(-timespan);
  const labels = [...Array(lineData.length + 1).keys()].slice(1);

  const handleTimespanChange = (e) => {
    setTimespan(e.target.value);
  };

  return (
    <StyledCoinPageChart>
      CoinPageChart
      <select onChange={handleTimespanChange}>
        <option value={12}>12h</option>
        <option value={24}>1d</option>
        <option value={72}>3d</option>
        <option value={120}>5d</option>
        <option value={168}>7d</option>
      </select>
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
