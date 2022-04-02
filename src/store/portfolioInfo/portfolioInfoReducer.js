export const SHOW_COIN_SHOP = "SHOW_COIN_SHOP";
export const HIDE_COIN_SHOP = "HIDE_COIN_SHOP";

const initialState = {
    showCoinShop: false,
}

export default function portfolioInfoReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_COIN_SHOP:
            return {...state, showCoinShop: action.payload};
        case HIDE_COIN_SHOP:
            return {...state, showCoinShop: action.payload};
        default: 
            return state;
    }
}