import { isFutureDate } from "utils"
import { SET_DISPLAY_DATA, SET_FORM_DATA, VALIDATE_INPUTS } from "./shopFormReducer"

export const handleFormChange = (keyOfInput, inputValue) => (dispatch, getState) => {
    const payloadObj = {
        "key": keyOfInput,
        "val": inputValue,
    }
       
    dispatch({ type: SET_FORM_DATA, payload: payloadObj})
}

export const setDisplayData = (displayData) => (dispatch, getState) => {
    dispatch({ type: SET_DISPLAY_DATA, payload: displayData });
}

export const validateInputs = () => (dispatch, getState) => {
    const state = getState();
    const purchaseAmt = state.shopForm.purchaseAmt;
    const purchaseDate = state.shopForm.purchaseDate;
    const displayData = state.shopForm.displayData;

    const parsedAmt = parseInt(purchaseAmt, 10);

    console.log("validating check")

    if(!purchaseDate) { console.log("no date selected"); dispatch({ type: VALIDATE_INPUTS, payload: false }); return }
    if( isFutureDate(purchaseDate) ) { console.log("date is in future"); dispatch({ type: VALIDATE_INPUTS, payload: false }); return }
    if(parsedAmt <= 0) { console.log("check failed. purchaseAmt too low"); dispatch({ type: VALIDATE_INPUTS, payload: false }); return }
    if( isNaN(parsedAmt) ) { console.log("check failed. not a number"); dispatch({ type: VALIDATE_INPUTS, payload: false }); return }
    if(!displayData) { console.log("coin not selected"); dispatch({ type: VALIDATE_INPUTS, payload: false }); return }
   
    console.log("check passed")
    dispatch({ type: VALIDATE_INPUTS, payload: true });
}