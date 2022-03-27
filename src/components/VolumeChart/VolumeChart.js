import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  formatOverviewNumber,
  wordedDate,
  getPreviousDates,
  startDate,
  getCurrencySymbol,
} from "utils";
import {
  BarChartContainer,
  OverviewInfo,
  StyledVolumeChart,
} from "./VolumeChart.styles";
import ChartLoader from "components/BitcoinOverview/ChartLoader";
import ChartError from "components/BitcoinOverview/ChartError";
import { getVolumeChartData } from "store/volumeData/action";

export function VolumeChart(props) {
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

  const error = useSelector((state) => state.volumeData.error);
  const isLoading = useSelector((state) => state.volumeData.isLoading);
  const volumeDatapoints = useSelector(
    (state) => state.volumeData.data?.volumeDatapoints
  );
  const todaysVolume = useSelector(
    (state) => state.volumeData.data?.todaysVolume
  );

  useEffect(() => {
    dispatch(getVolumeChartData(span));
  }, [currency, props.timeSpan]);

  if (error) {
    return (
      <StyledVolumeChart>
        <ChartError errorMessage={error.message} />
      </StyledVolumeChart>
    );
  }

  return (
    <>
      <StyledVolumeChart>
        {isLoading && <ChartLoader />}
        <OverviewInfo>
          <p>Volume 24h</p>
          <div>
            {currencySymbol}
            {formatOverviewNumber(todaysVolume)}
          </div>
          <p>{wordedDate(new Date())}</p>
        </OverviewInfo>
        <BarChartContainer>
          <Bar
            data={{
              labels: getPreviousDates(startDate(), props.timeSpan),
              datasets: [
                {
                  data: volumeDatapoints,
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
    </>
  );
}

export default VolumeChart;
