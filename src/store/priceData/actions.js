import axios from "axios";
import { createDarkGradient, startDate, getPreviousDates } from "utils";
import {
  GET_PRICE_CHART_DATA_SUCCESS,
  GET_PRICE_CHART_DATA_PENDING,
  GET_PRICE_CHART_DATA_ERROR,
} from "./priceDataReducer";

export const getPriceChartData =
  (span, chartRef, timeSpan) => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_PRICE_CHART_DATA_PENDING });

      const state = getState();
      const currency = state.currency;

      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${span}&interval=daily`
      );
      const priceData = response.data.prices
        .map((price) => price[1])
        .slice(1, span + 1);
      const todaysPrice = response.data.prices[0][1];
      const chart = chartRef?.current;
      let priceDatapoints = { datasets: [] };
      if (chart) {
        priceDatapoints = {
          labels: getPreviousDates(startDate(), timeSpan) || [],
          datasets: [
            {
              data: priceData,
              borderColor: "#00FF5F8F",
              backgroundColor: createDarkGradient(chart.ctx),
              fill: {
                target: "origin",
              },
            },
          ],
        };
      }
      const payloadObj = {
        priceDatapoints,
        todaysPrice,
      };
      dispatch({ type: GET_PRICE_CHART_DATA_SUCCESS, payload: payloadObj });
    } catch (err) {
      dispatch({ type: GET_PRICE_CHART_DATA_ERROR, payload: err });
    }
  };
