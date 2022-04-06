import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { coinShopHide, savePurchasedCoin } from "store/portfolioInfo/actions";
import {
  CoinShopForm,
  CoinShopBackground,
  SelectCoins,
  StyledNewCoin,
  SelectCoinsContainer,
  CloseButton,
  PurchaseDetailsContainer,
  CoinId,
  InputsContainer,
  AmtInput,
  SearchInput,
  DateInput,
  ButtonsContainer,
  ButtonA,
  ButtonB,
  CoinImageWrap,
  CoinName,
} from "./CoinShop.styles";
import CoinSearch from "components/CoinSearch";
import Cross from "icons/Cross.svg";
import ShopSearch from "components/ShopSearch";
import { handleFormChange, validateInputs } from "store/shopForm/actions";

function NewCoin() {
  const dispatch = useDispatch();
  const showCoinShop = useSelector((state) => state.portfolioInfo.showCoinShop);
  const displayData = useSelector((state) => state.shopForm.displayData);
  const purchaseAmt = useSelector((state) => state.shopForm.purchaseAmt);
  const purchaseDate = useSelector((state) => state.shopForm.purchaseDate);
  const allowSave = useSelector((state) => state.shopForm.allowSave);

  const formData = useSelector((state) => state.shopForm);
  console.log("formData: ", formData);
  console.log("allowSave: ", allowSave);

  function handlePurchaseSave(e) {
    e.preventDefault();
    if (!allowSave) {
      return;
    }
    dispatch(savePurchasedCoin());
  }

  return (
    <CoinShopBackground>
      <CoinShopForm>
        <SelectCoinsContainer>
          <SelectCoins>Select Coin</SelectCoins>
          <CloseButton>
            <img
              onClick={() => dispatch(coinShopHide())}
              src={Cross}
              alt="close cross"
            />
          </CloseButton>
        </SelectCoinsContainer>

        <PurchaseDetailsContainer>
          <CoinId>
            <CoinImageWrap>
              <img src={displayData?.thumb} />
            </CoinImageWrap>
            <CoinName>{displayData?.name}{displayData?.symbol}</CoinName>
          </CoinId>
          <InputsContainer>
            <form>
                <ShopSearch />
              <AmtInput>
                <input
                  onChange={(e) => {
                    dispatch(handleFormChange("purchaseAmt", e.target.value));
                    dispatch(validateInputs());
                  }}
                  value={purchaseAmt}
                  type="text"
                  placeholder="purchase amount"
                />
              </AmtInput>
              <DateInput>
                <input
                  onChange={(e) => {
                    dispatch(handleFormChange("purchaseDate", e.target.value));
                    dispatch(validateInputs());
                  }}
                  value={purchaseDate}
                  type="date"
                  placeholder="purchase date"
                />
              </DateInput>
            </form>
          </InputsContainer>
        </PurchaseDetailsContainer>

        <ButtonsContainer>
          <ButtonA onClick={() => dispatch(coinShopHide())} >Close</ButtonA>
          <ButtonB onClick={handlePurchaseSave} allowSave={allowSave}>Save and Continue</ButtonB>
        </ButtonsContainer>
      </CoinShopForm>
    </CoinShopBackground>
  );
}

export default NewCoin;
