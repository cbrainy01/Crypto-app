export const SHOW_COIN_SHOP = "SHOW_COIN_SHOP";
export const HIDE_COIN_SHOP = "HIDE_COIN_SHOP";
export const SAVE_PURCHASED_COIN = "SAVE_PURCHASED_COIN";
export const REMOVE_PURCHASED_COIN = "REMOVE_PURCHASED_COIN";

const initialState = {
  showCoinShop: false,
  purchasedCoins: [
    {
      "purchaseAmt": "15",
      "purchaseDate": "2022-03-29",
      "purchaseId": "bitcoin + 74059ef7-c5b5-4185-86d9-aa6a80502682",
      "displayData": {
        'id': "bitcoin",
        'large': "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        'market_cap_rank': 1,
        'name': "Bitcoin",
        'symbol': "BTC",
        'thumb': "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      }
    },
    {
      'purchaseAmt': "3",
      'purchaseDate': "2021-12-01",
      'purchaseId': "helium + 279e8813-fdf5-4834-87cc-cccabeeab629",
      'displayData': {
        'id': "helium",
        'large': "https://assets.coingecko.com/coins/images/4284/large/Helium_HNT.png",
        'market_cap_rank': 59,
        'name': "Helium",
        'symbol': "HNT",
        'thumb': "https://assets.coingecko.com/coins/images/4284/thumb/Helium_HNT.png",
      }
    }
  ],
};

export default function portfolioInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_COIN_SHOP:
      return { ...state, showCoinShop: action.payload };
    case HIDE_COIN_SHOP:
      return { ...state, showCoinShop: action.payload };
    case SAVE_PURCHASED_COIN:
      return {
        ...state,
        purchasedCoins: [...state.purchasedCoins, action.payload],
        showCoinShop: false,
      };
    case REMOVE_PURCHASED_COIN:
      return { ...state, purchasedCoins: action.payload };
    default:
      return state;
  }
}
