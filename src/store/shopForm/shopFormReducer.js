export const SET_FORM_DATA = "SET_FORM_DATA";
export const SET_DISPLAY_DATA = "SET_DISPLAY_DATA";
export const VALIDATE_INPUTS = "VALIDATE_INPUTS";
export const RESET_FORM = "RESET_FORM";

const initialState = {
    displayData: undefined,
    purchaseAmt: "",
    purchaseDate: "",
    allowSave: false,
}

export default function shopFormReducer(state = initialState, action) {
    switch(action.type) {
        case SET_FORM_DATA:
            return {...state, [action.payload.key]: action.payload.val};
        case SET_DISPLAY_DATA:
            return {...state, displayData: action.payload}
        case VALIDATE_INPUTS:
            return {...state, allowSave: action.payload};
        case RESET_FORM:
            return initialState;
        default:
            return state;
    }
}

