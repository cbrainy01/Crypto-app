export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
const initialState = "usd";

function currencyReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CURRENCY:
            return action.payload;
        default:
            return state;
    }
} 

export default currencyReducer;

export const getCurrency = (state) => state.currency