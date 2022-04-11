import axios from "axios";
import {
  SEARCH_CLEANUP,
  GET_QUERY_MATCHES_PENDING,
  GET_QUERY_MATCHES_SUCCESS,
  GET_QUERY_MATCHES_ERROR,
  SEARCH_FOCUS,
  SEARCH_BLUR,
} from "./coinSearchReducer";

export const getQueryMatches = (queryValue) => async (dispatch, getState) => {
  const state = getState();
  const cleanedUp = state.coinSearch.cleanedUp
  if(cleanedUp && !queryValue) {return}
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

export const searchFocus = () => (dispatch) => {
  dispatch({ type: SEARCH_FOCUS });
}

export const searchBlur = () => (dispatch) => {
  dispatch({ type: SEARCH_BLUR });
}