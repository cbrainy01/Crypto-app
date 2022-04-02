import axios from "axios";
import { SHOW_COIN_SHOP, HIDE_COIN_SHOP } from "./portfolioInfoReducer";

export const coinShopDisplay = () => (dispatch) => {
    dispatch({ type: SHOW_COIN_SHOP, payload: true });
}

export const coinShopHide = () => (dispatch) => {
    dispatch({ type: HIDE_COIN_SHOP, payload: false });
}