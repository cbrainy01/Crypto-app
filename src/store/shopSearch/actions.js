import axios from "axios";
import { SHOP_SEARCH_CLEANUP, GET_SHOP_QUERY_MATCHES_PENDING, GET_SHOP_QUERY_MATCHES_SUCCESS, GET_SHOP_QUERY_MATCHES_ERROR } from "./shopSearchReducer";

export const getShopQueryMatches = (queryValue) => async(dispatch, getState) => {
    try {
        dispatch({ type: GET_SHOP_QUERY_MATCHES_PENDING })
        const resp = await axios(
            `https://crypto-app-server.herokuapp.com/coins/${queryValue}`
        );
        dispatch({ type: GET_SHOP_QUERY_MATCHES_SUCCESS, payload: resp.data });
    }
    catch(err) {
        dispatch({ type: GET_SHOP_QUERY_MATCHES_ERROR, payload: err })
    }
}

// export const searchCleanup = () => (dispatch, getState) => {
export const shopSearchCleanup = () => (dispatch, getState) => {
    dispatch({ type: SHOP_SEARCH_CLEANUP })
}

// export const setDisplayData = (displayData) => (dispatch, getState) => {
//     dispatch({ type: SET_DISPLAY_DATA, payload: displayData });
// }