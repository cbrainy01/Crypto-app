import { isFutureDate } from "utils";
import {
  RESET_FORM,
  SET_DISPLAY_DATA,
  SET_FORM_DATA,
  VALIDATE_INPUTS,
} from "./shopFormReducer";

export const handleFormChange =
  (keyOfInput, inputValue) => (dispatch, getState) => {
    const payloadObj = {
      key: keyOfInput,
      val: inputValue,
    };

    dispatch({ type: SET_FORM_DATA, payload: payloadObj });
  };

export const setDisplayData = (displayData) => (dispatch, getState) => {
  dispatch({ type: SET_DISPLAY_DATA, payload: displayData });
};

export const validateInputs = () => (dispatch, getState) => {
  const state = getState();
  const purchaseAmt = state.shopForm.purchaseAmt;
  const purchaseDate = state.shopForm.purchaseDate;
  const displayData = state.shopForm.displayData;

  const parsedAmt = parseInt(purchaseAmt, 10);

  if (!purchaseDate) {
    dispatch({ type: VALIDATE_INPUTS, payload: false });
    return;
  }
  if (isFutureDate(purchaseDate)) {
    dispatch({ type: VALIDATE_INPUTS, payload: false });
    return;
  }
  if (parsedAmt <= 0) {
    dispatch({ type: VALIDATE_INPUTS, payload: false });
    return;
  }
  if (isNaN(parsedAmt)) {
    dispatch({ type: VALIDATE_INPUTS, payload: false });
    return;
  }
  if (!displayData) {
    dispatch({ type: VALIDATE_INPUTS, payload: false });
    return;
  }

  dispatch({ type: VALIDATE_INPUTS, payload: true });
};

export const resetForm = () => (dispatch, getState) => {
  dispatch({ type: RESET_FORM });
};
