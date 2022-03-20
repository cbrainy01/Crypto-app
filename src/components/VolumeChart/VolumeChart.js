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
import { BarChartContainer, OverviewInfo, StyledVolumeChart } from "./VolumeChart.styles";
import ChartLoader from "components/BitcoinOverview/ChartLoader";
import ChartError from "components/BitcoinOverview/ChartError";

export function VolumeChart(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [volumeData, setVolumeData] = useState([]);
  const [todaysVolume, setTodaysVolume] = useState(null);
  const currencySymbol = getCurrencySymbol(props.currency);

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
        // `https://pi.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${span}&interval=daily`
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

  if(isLoading) { return (<StyledVolumeChart><ChartLoader/></StyledVolumeChart>) }
  if(error) { return(<StyledVolumeChart><ChartError errorMessage={error.message}/></StyledVolumeChart>) }

  return (
    <StyledVolumeChart>
      <OverviewInfo>
      <p>Volume 24h</p>
      <div>{currencySymbol}{formatOverviewNumber(todaysVolume)}</div>
      <p>{wordedDate(new Date())}</p>
      </OverviewInfo>
      <BarChartContainer>
      <Bar
        data={{
          labels: getPreviousDates(startDate(), props.timeSpan),
          datasets: [
            {
              data: volumeData,
              borderColor: "#2172E5",
              backgroundColor: "#2172E5",
              borderRadius: 2,
            },
          ],
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
                font: {
                  size: 6,
                },
                maxRotation: 0,
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: function (context) {
                  return `Price: ${currencySymbol}${context[0].formattedValue}`;
                },
                label: function (context) {
                  return `date: ${context.label}`;
                },
              },
            },
            legend: { display: false },
          },
        }}
      />
      </BarChartContainer>
    </StyledVolumeChart>
  );
}

export default VolumeChart;
