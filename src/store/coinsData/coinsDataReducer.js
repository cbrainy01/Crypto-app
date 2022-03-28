export const GET_COINS_DATA_SUCCESS = "GET_COINS_DATA_SUCCESS";
export const GET_COINS_DATA_PENDING = "GET_COINS_DATA_PENDING";
export const GET_COINS_DATA_ERROR = "GET_COINS_DATA_ERROR";

const initialState = {
  data: {
    coinsData: [],
    currentPage: 1,
  },
  hasMore: true,
  isLoading: false,
  error: false,
};

export default function coinsDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_DATA_PENDING:
      return { ...state, isLoading: true, error: false };
    case GET_COINS_DATA_SUCCESS:
      return { ...state, isLoading: false, error: false, ...action.payload };
    case GET_COINS_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
