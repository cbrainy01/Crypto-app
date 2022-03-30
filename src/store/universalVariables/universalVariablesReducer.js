export const TOGGLE_THEME = "TOGGLE_THEME";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";

const initialState = {
  isBlacked: true,
  currency: "usd",
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
    default:
      return state;
  }
}
