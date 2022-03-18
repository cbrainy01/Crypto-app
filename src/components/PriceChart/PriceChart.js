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
import { LineChartContainer, OverviewInfo, StyledPriceChart } from "./PriceChart.styles";

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
  // transparent linear-gradient(180deg, #00FF5F8F 0%, #FFFFFF32 0%, #00FF5F00 100%) 0% 0% no-repeat padding-box;
  // const gradient = chart.createLinearGradient(0, 0, 0, 100)
  // gradient.addColorStop(0, "#00FF5F8F")
  // gradient.addColorStop(0, "#FFFFFF32")
  // gradient.addColorStop(1, "#00FF5F00 ")
  // const myChartRef = useRef()
  // const myChartRef = React.createRef()
// TODO:
  // const myChartRef = useRef()
  // console.log("ref: ", myChartRef)
  // console.log("tst: ", myChartRef.current?.firstChild)
  // const gradient = myChartRef.current?.firstChild.canvas
  // TODO:
  // const gradient = myChartRef.chartInstance.ctx.createLinearGradient(0, 0, 0, 100)
  // gradient.addColorStop(0, "#00FF5F8F")
  // gradient.addColorStop(0, "#FFFFFF32")
  // gradient.addColorStop(1, "#00FF5F00 ")

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    console.log("ctx: ", ctx)
    let gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "#00FF5F8F")
    gradient.addColorStop(0, "#FFFFFF32")
    gradient.addColorStop(1, "#00FF5F00 ")

    return {
      // labels: getPreviousDates(startDate(), props.timeSpan),
      labels: [0,2,5,7,6,4],
      datasets: [
        {
          // data: priceData,
          data: [
            { x: 4, y: 37779 },
            { x: 5, y: 377434 },
            { x: 6, y: 37734 },
            { x: 7, y: 37766 },
          ],
          // borderColor: "rgb(255, 99, 132)",
          borderColor: "#00FF5F8F",
          // backgroundColor: "rgba(255, 99, 132, 0.5)",
          // backgroundColor: "linear-gradient(180deg, #00FF5F8F 0%, #FFFFFF32 0%, #00FF5F00 100%)",
          // backgroundColor: gradient,
          backgroundColor: "green",
          fill: {
            target: "origin",
            // below: "red",
            // below: "#00FF5F8F",
            // below: "transparent linear-gradient(180deg, #00FF5F8F 0%, #FFFFFF32 0%, #00FF5F00 100%) 0% 0% no-repeat padding-box",
          },
        },
      ],
    }
  }

  return (
    <StyledPriceChart>
      <OverviewInfo>
        <p>BTC</p>
      <div>{currencySymbol}{formatOverviewNumber(todaysPrice)}</div>
      <p>{wordedDate(new Date())}</p>
      </OverviewInfo>
      <LineChartContainer>
      <Line
        
        data={{
          labels: getPreviousDates(startDate(), props.timeSpan),
          datasets: [
            {
              data: priceData,
              // borderColor: "rgb(255, 99, 132)",
              borderColor: "#00FF5F8F",
              // backgroundColor: "rgba(255, 99, 132, 0.5)",
              // backgroundColor: "linear-gradient(180deg, #00FF5F8F 0%, #FFFFFF32 0%, #00FF5F00 100%)",
              // backgroundColor: gradient,
              backgroundColor: "pink",
              fill: {
                target: "origin",
                // below: "red",
                // below: "#00FF5F8F",
                // below: "transparent linear-gradient(180deg, #00FF5F8F 0%, #FFFFFF32 0%, #00FF5F00 100%) 0% 0% no-repeat padding-box",
              },
            },
          ],
        }}
        // data={data}
        options={{
          elements: {
            point: { radius: 0, hitRadius: 6, backgroundColor: "#00FF5F8F", },
            line: { tension: .2 }
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
                }
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
            legend: { display: false },
          },
         
        }}
      />
      </LineChartContainer>
    </StyledPriceChart>
  );
}

export default PriceChart;
