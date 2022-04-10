export const TOGGLE_THEME = "TOGGLE_THEME";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const CHANGE_TIMESPAN = "CHANGE_TIMESPAN";

const initialState = {
  isBlacked: true,
  currency: "usd",
  timeSpan: "1",
};

export default function universalVariablesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isBlacked: action.payload };
    case CHANGE_CURRENCY:
      return { ...state, currency: action.payload };
    case CHANGE_TIMESPAN:
      return { ...state, timeSpan: action.payload };
    default:
      return state;
  }
}
