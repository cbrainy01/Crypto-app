import axios from "axios";
import {
  SEARCH_CLEANUP,
  GET_QUERY_MATCHES_PENDING,
  GET_QUERY_MATCHES_SUCCESS,
  GET_QUERY_MATCHES_ERROR,
} from "./coinSearchReducer";

export const getQueryMatches = (queryValue) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_QUERY_MATCHES_PENDING });
    const resp = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${queryValue}`
    );
    dispatch({ type: GET_QUERY_MATCHES_SUCCESS, payload: resp.data });
  } catch (err) {
    dispatch({ type: GET_QUERY_MATCHES_ERROR, payload: err });
  }
};

export const searchCleanup = () => (dispatch, getState) => {
  dispatch({ type: SEARCH_CLEANUP });
};
