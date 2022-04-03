export const GET_SHOP_QUERY_MATCHES_PENDING = "GET_SHOP_QUERY_MATCHES_PENDING";
export const GET_SHOP_QUERY_MATCHES_SUCCESS = "GET_SHOP_QUERY_MATCHES_SUCCESS";
export const GET_SHOP_QUERY_MATCHES_ERROR = "GET_SHOP_QUERY_MATCHES_ERROR";
export const SHOP_SEARCH_CLEANUP = "SHOP_SEARCH_CLEANUP";
// export const SET_DISPLAY_DATA = "SET_DISPLAY_DATA";

const initialState = {
    isLoading: false,
    error: false,
    searchResults: [],
    // displayData: null,
}

export default function shopSearchReducer(state = initialState, action) {
    // console.log("a")
    switch(action.type) {
        case GET_SHOP_QUERY_MATCHES_PENDING:
            return {...state, isLoading: true, error: false};
        case GET_SHOP_QUERY_MATCHES_SUCCESS:
            return {...state, isLoading: false, searchResults: action.payload, error: false};
        case GET_SHOP_QUERY_MATCHES_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case SHOP_SEARCH_CLEANUP:
            return {...state, searchResults: []};
        // case SET_DISPLAY_DATA:
            // return {...state, displayData: action.payload};
        default:
            return state;
    }
}