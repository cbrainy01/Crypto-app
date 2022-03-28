import axios from "axios";
import reduceSparkline from "utils/reduceSparkline";
import {
  GET_COINS_DATA_SUCCESS,
  GET_COINS_DATA_PENDING,
  GET_COINS_DATA_ERROR,
} from "./coinsDataReducer";

export const getCoinsData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_COINS_DATA_PENDING });
    const state = getState();
    let coinsData = state.coinsData.data.coinsData;
    let currentPage = state.coinsData.data.currentPage;
    let hasMore = state.coinsData.hasMore;
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    const updatedData = reduceSparkline(data);
    if (coinsData.length == 0) {
      coinsData = updatedData;
      currentPage = currentPage + 1;
    } else {
      coinsData = coinsData.concat(updatedData);
      currentPage = currentPage + 1;
      if (coinsData.length >= 30) {
        hasMore = false;
      }
    }

    const payloadObj = {
      data: { coinsData, currentPage },
      hasMore,
    };
    dispatch({
      type: GET_COINS_DATA_SUCCESS,
      payload: payloadObj,
    });
  } catch (err) {
    dispatch({ type: GET_COINS_DATA_ERROR, payload: err });
  }
};
