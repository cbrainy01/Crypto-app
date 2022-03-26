import { CHANGE_CURRENCY } from "./currencyReducer";

export const changeCurrency = (newCurrency) => {
    console.log("changing currency")
    return {
        type: CHANGE_CURRENCY,
        payload: newCurrency,
    }
}