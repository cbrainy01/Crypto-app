export const SHOW_COIN_SHOP = "SHOW_COIN_SHOP";
export const HIDE_COIN_SHOP = "HIDE_COIN_SHOP";
export const SAVE_PURCHASED_COIN = "SAVE_PURCHASED_COIN";
export const REMOVE_PURCHASED_COIN = "REMOVE_PURCHASED_COIN";

const initialState = {
    showCoinShop: false,
    purchasedCoins: [],
}

export default function portfolioInfoReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_COIN_SHOP:
            return {...state, showCoinShop: action.payload};
        case HIDE_COIN_SHOP:
            return {...state, showCoinShop: action.payload};
        case SAVE_PURCHASED_COIN:
            return {...state, purchasedCoins: [...state.purchasedCoins, action.payload], showCoinShop: false };
        case REMOVE_PURCHASED_COIN:
            return {...state, purchasedCoins: action.payload};
        default: 
            return state;
    }
}