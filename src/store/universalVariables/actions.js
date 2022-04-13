import { TOGGLE_THEME, CHANGE_CURRENCY, CHANGE_TIMESPAN, SET_PAGENAME } from "./universalVariablesReducer";

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

export const changeTimeSpan = (updatedTimeSpan) => {
  return {
    type: CHANGE_TIMESPAN,
    payload: updatedTimeSpan,
  };
};

export const setPageName = (updatedPage) => {
  return {
    type: SET_PAGENAME,
    payload: updatedPage,
  }
}

