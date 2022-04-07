import axios from "axios";
import {
  GET_COIN_DATA_SUCCESS,
  GET_COIN_DATA_PENDING,
  GET_COIN_DATA_ERROR,
} from "./coinDataReducer";

export const getCoinData = (coinId) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_COIN_DATA_PENDING });

    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    );

    dispatch({ type: GET_COIN_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_COIN_DATA_ERROR, payload: err });
  }
};
