import axios from "axios";
import {
  GET_VOLUME_CHART_DATA_SUCCESS,
  GET_VOLUME_CHART_DATA_PENDING,
  GET_VOLUME_CHART_DATA_ERROR,
} from "./volumeDataReducer";

export const getVolumeChartData = (span) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_VOLUME_CHART_DATA_PENDING });
    const state = getState();
    const currency = state.universalVariables.currency

    const response = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${span}&interval=daily`
    );
    const volumeDatapoints = response.data.total_volumes
      .map((volume) => volume[1])
      .slice(1, span + 1);

    const todaysVolume = response.data.total_volumes[0][1];
    const payloadObj = {
      volumeDatapoints,
      todaysVolume,
    };
    dispatch({
      type: GET_VOLUME_CHART_DATA_SUCCESS,
      payload: payloadObj,
    });
  } catch (err) {
    dispatch({ type: GET_VOLUME_CHART_DATA_ERROR, payload: err });
  }
};
