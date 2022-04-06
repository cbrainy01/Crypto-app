import { v4 as uuid } from "uuid";
import {
  SHOW_COIN_SHOP,
  HIDE_COIN_SHOP,
  SAVE_PURCHASED_COIN,
  REMOVE_PURCHASED_COIN,
} from "./portfolioInfoReducer";

export const coinShopDisplay = () => (dispatch) => {
  dispatch({ type: SHOW_COIN_SHOP, payload: true });
};

export const coinShopHide = () => (dispatch) => {
  dispatch({ type: HIDE_COIN_SHOP, payload: false });
};

export const savePurchasedCoin = () => (dispatch, getState) => {
  const state = getState();
  const formDataObj = state.shopForm;

  const { allowSave, ...purchasedCoinInfo } = formDataObj;
  const purchaseId = `${purchasedCoinInfo.displayData.id} + ${uuid()}`;
  purchasedCoinInfo["purchaseId"] = purchaseId;

  dispatch({ type: SAVE_PURCHASED_COIN, payload: purchasedCoinInfo });
};

export const removePurchasedCoin = (deleteId) => (dispatch, getState) => {
  const state = getState();
  const purchasedCoinsArray = state.portfolioInfo.purchasedCoins;

  const updatedPurchasedCoins = purchasedCoinsArray.filter(
    (coin) => coin.purchaseId !== deleteId
  );

  dispatch({ type: REMOVE_PURCHASED_COIN, payload: updatedPurchasedCoins });
};
