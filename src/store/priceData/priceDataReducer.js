export const GET_PRICE_CHART_DATA_SUCCESS = "GET_PRICE_CHART_DATA_SUCCESS";
export const GET_PRICE_CHART_DATA_PENDING = "GET_PRICE_CHART_DATA_PENDING";
export const GET_PRICE_CHART_DATA_ERROR = "GET_PRICE_CHART_DATA_ERROR";

const initialState = {
  data: null,
  isLoading: false,
  error: false,
};

export default function priceDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRICE_CHART_DATA_PENDING:
      return { ...state, isLoading: true, error: false };
    case GET_PRICE_CHART_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload, error: false };
    case GET_PRICE_CHART_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
