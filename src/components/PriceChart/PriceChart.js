import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { formatOverviewNumber, wordedDate, getCurrencySymbol } from "utils";
import {
  LineChartContainer,
  OverviewInfo,
  StyledPriceChart,
} from "./PriceChart.styles";
import ChartLoader from "components/BitcoinOverview/ChartLoader";
import ChartError from "components/BitcoinOverview/ChartError";
import { getPriceChartData } from "store/priceData/actions";

export function PriceChart(props) {
  const chartRef = useRef(null);
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currency);
  const currencySymbol = getCurrencySymbol(currency);
  const { timeSpan } = props;
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

  const isLoading = useSelector((state) => state.priceData.isLoading);
  const error = useSelector((state) => state.priceData.error);
  const priceDatapoints = useSelector(
    (state) => state.priceData.data?.priceDatapoints
  );
  const todaysPrice = useSelector((state) => state.priceData.data?.todaysPrice);

  useEffect(() => {
    dispatch(getPriceChartData(span, chartRef, timeSpan));
  }, [currency, props.timeSpan]);

  if (error) {
    return (
      <StyledPriceChart>
        <ChartError errorMessage={error.message} />
      </StyledPriceChart>
    );
  }

  return (
    <>
      <StyledPriceChart>
        {isLoading && <ChartLoader />}
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
            data={priceDatapoints || { datasets: [] }}
            options={{
              elements: {
                point: {
                  radius: 0,
                  hitRadius: 8,
                  backgroundColor: "#00FF5F8F",
                },
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
    </>
  );
}

export default PriceChart;
