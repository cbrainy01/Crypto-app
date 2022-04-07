import { CHANGE_CURRENCY } from "./currencyReducer";

export const changeCurrency = (newCurrency) => {
    return {
        type: CHANGE_CURRENCY,
        payload: newCurrency,
    }
}