import { TOGGLE_THEME, CHANGE_CURRENCY } from "./universalVariablesReducer";

export const changeCurrency = (newCurrency) => {
  return {
    type: CHANGE_CURRENCY,
    payload: newCurrency,
  };
};

export const toggleTheme = (updatedTheme) => {
    return {
    type: TOGGLE_THEME,
    payload: updatedTheme,
  };
};
