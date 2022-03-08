import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {
  formatOverviewNumber,
  wordedDate,
  getPreviousDates,
  startDate,
  getCurrencySymbol,
} from "utils";
import { StyledVolumeChart } from "./VolumeChart.styles";

export function VolumeChart(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [volumeData, setVolumeData] = useState([]);
  const [todaysVolume, setTodaysVolume] = useState(null);

  const getMarketChartData = async () => {
    try {
      setIsLoading(true);
      const { currency, timeSpan } = props;
      let span;
      switch (timeSpan) {
        case "1":
          span = 30;
          break;
        case "3":
          span = 90;
          break;
        case "6":
          span = 180;
          break;
        case "12":
          span = 360;
          break;
        default:
          span = 7;
          break;
      }
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${span}&interval=daily`
      );
      const volumeData = response.data.total_volumes
        .map((volume) => volume[1])
        .slice(1, span + 1);
      const todaysVolume = response.data.total_volumes[0][1];
      setIsLoading(false);
      setVolumeData(volumeData);
      setTodaysVolume(todaysVolume);
    } catch (err) {
      console.error("error: ", err);
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    getMarketChartData();
  }, [props.currency, props.timeSpan]);

  const currencySymbol = getCurrencySymbol(props.currency);
  return (
    <StyledVolumeChart>
      VolumeChart
      <div>Volume 24h</div>
      <div>
        Todays volume: {currencySymbol}
        {formatOverviewNumber(todaysVolume)}
      </div>
      <div>Todays date: {wordedDate(new Date())}</div>
      <Bar
        data={{
          labels: getPreviousDates(startDate(), props.timeSpan),
          datasets: [
            {
              data: volumeData,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        }}
        options={{
          scales: {
            y: {
              ticks: {
                callback: function (value, index, ticks) {
                  return value;
                },
              },
            },
            x: {
              ticks: {
                callback: function (val, index) {
                  const day = this.getLabelForValue(val).split("-")[1];
                  return day;
                },
              },
            },
          },
        }}
        options={{
          scales: {
            y: {
              display: false,
              grid: {
                display: false,
              },
              ticks: {
                callback: function (value, index, ticks) {
                  return value;
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                callback: function (val, index) {
                  const day = this.getLabelForValue(val).split("-")[1];
                  return day;
                },
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: function (context) {
                  return `Price: ${context[0].formattedValue}`;
                },
                label: function (context) {
                  return `date: ${context.label}`;
                },
              },
            },
          },
        }}
      />
    </StyledVolumeChart>
  );
}

export default VolumeChart;
