export const GET_GLOBAL_DATA_SUCCESS = "GET_GLOBAL_DATA_SUCCESS";
export const GET_GLOBAL_DATA_PENDING = "GET_GLOBAL_DATA_PENDING";
export const GET_GLOBAL_DATA_ERROR = "GET_GLOBAL_DATA_ERROR";

const initialState = {
    data: null,
    isLoading: false,
    error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
      case GET_GLOBAL_DATA_PENDING:
          return {...state, isLoading: true, error: false}
    case GET_GLOBAL_DATA_SUCCESS:
      return {...state, data: action.payload, isLoading: false };
      case GET_GLOBAL_DATA_ERROR:
          return {...state, isLoading: false, error: action.payload}
    default:
      return state;
  }
}
