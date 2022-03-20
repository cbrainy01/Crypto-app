import React, { useState, useEffect, useRef } from "react";
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
import {
  LineChartContainer,
  OverviewInfo,
  StyledPriceChart,
} from "./PriceChart.styles";
import ChartLoader from "components/BitcoinOverview/ChartLoader"
import ChartError from "components/BitcoinOverview/ChartError";

export function PriceChart(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [priceData, setPriceData] = useState([]);
  const [todaysPrice, setTodaysPrice] = useState(null);
  const [chartData, setChartData] = useState({ datasets: [] });
  const chartRef = useRef(null);
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
      const priceData = response.data.prices
        .map((price) => price[1])
        .slice(1, span + 1);
      const todaysPrice = response.data.prices[0][1];

      const chart = chartRef.current;
      if (chart) {
        console.log("made it")
        const chartData = {
          labels: getPreviousDates(startDate(), props.timeSpan),
          datasets: [
            {
              data: priceData,
              borderColor: "#00FF5F8F",
              backgroundColor: createGradient(chart.ctx),
              fill: {
                target: "origin",
              },
            },
          ],
        };
        setChartData(chartData);
      }

      setIsLoading(false);
      setPriceData(priceData);
      setTodaysPrice(todaysPrice);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setError(err);
    }
  };

  function createGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "#00FF5F8F");
    gradient.addColorStop(0.15, "#FFFFFF32");
    gradient.addColorStop(1, "#00FF5F00 ");
    return gradient;
  }

  useEffect(() => {
    getMarketChartData();
    // if(prevChart.current !== currentChart.current && prevChart.current === null) {getmarketchartdata()}
  }, [props.currency, props.timeSpan]);
  
  console.log("cref: ", chartRef)
  // console.log("loadstatus: ", isLoading)
  // console.log("priceData: ", priceData)
  if(isLoading) { return (<StyledPriceChart><ChartLoader/></StyledPriceChart>) }
  if(error) { return (<StyledPriceChart><ChartError errorMessage={error.message}/></StyledPriceChart>) }

  return (
    <StyledPriceChart>
      <OverviewInfo>
        <p>BTC</p>
        <div>
          {currencySymbol}
          {formatOverviewNumber(todaysPrice)}
        </div>
        <p>{wordedDate(new Date())}</p>
      </OverviewInfo>
      <LineChartContainer>
        <Line
          ref={chartRef}
          data={chartData}
          options={{
            elements: {
              point: { radius: 0, hitRadius: 6, backgroundColor: "#00FF5F8F" },
              line: { tension: 0.2 },
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
                  font: {
                    size: 8,
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
      </LineChartContainer>
    </StyledPriceChart>
  );
}

export default PriceChart;
