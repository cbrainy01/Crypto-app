import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  getPreviousDates,
  formatOverviewNumber,
  startDate,
  wordedDate,
  getCurrencySymbol,
} from "utils";
import { StyledPriceChart } from "./PriceChart.styles";

export function PriceChart(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [priceData, setPriceData] = useState([]);
  const [todaysPrice, setTodaysPrice] = useState(null);

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
      const priceData = response.data.prices
        .map((price) => price[1])
        .slice(1, span + 1);
      const todaysPrice = response.data.prices[0][1];
      setIsLoading(false);
      setPriceData(priceData);
      setTodaysPrice(todaysPrice);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    getMarketChartData();
  }, [props.currency, props.timeSpan]);

  const currencySymbol = getCurrencySymbol(props.currency);
  return (
    <StyledPriceChart>
      Price Chart
      <h3>Price</h3>
      <div>Todays price: {formatOverviewNumber(todaysPrice)}</div>
      <div>Todays date: {wordedDate(new Date())}</div>
      <Line
        data={{
          labels: getPreviousDates(startDate(), props.timeSpan),
          datasets: [
            {
              data: priceData,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              fill: {
                target: "origin",
                below: "red",
              },
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
    </StyledPriceChart>
  );
}

export default PriceChart;
