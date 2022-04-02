export const GET_QUERY_MATCHES_PENDING = "GET_QUERY_MATCHES_PENDING";
export const GET_QUERY_MATCHES_SUCCESS = "GET_QUERY_MATCHES_SUCCESS";
export const GET_QUERY_MATCHES_ERROR = "GET_QUERY_MATCHES_ERROR";
export const SEARCH_CLEANUP = "SEARCH_CLEANUP";

const initialState = {
    isLoading: false,
    error: false,
    searchResults: [],
}

export default function coinSearchReducer(state = initialState, action) {
    switch(action.type) {
        case GET_QUERY_MATCHES_PENDING:
            return {...state, isLoading: true, error: false};
        case GET_QUERY_MATCHES_SUCCESS:
            return {...state, isLoading: false, searchResults: action.payload, error: false};
        case GET_QUERY_MATCHES_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case SEARCH_CLEANUP:
            return {...state, searchResults: []};
        default:
            return state;
    }
}