import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { coinShopHide } from "store/portfolioInfo/actions";
import {CoinShopForm, CoinShopBackground, SelectCoins, StyledNewCoin, SelectCoinsContainer, CloseButton, PurchaseDetailsContainer, CoinId, InputsContainer, AmtInput, SearchInput, DateInput, ButtonsContainer, ButtonA, ButtonB} from "./CoinShop.styles";
import Cross from "icons/Cross.svg";

function NewCoin() {
  const dispatch = useDispatch()
  const showCoinShop = useSelector((state) => state.portfolioInfo.showCoinShop);

  return (
    <CoinShopBackground>
      <CoinShopForm>
        
        <SelectCoinsContainer>
          <SelectCoins>Select Coins</SelectCoins>
          <CloseButton><img onClick={() => dispatch(coinShopHide())} src={Cross} alt="close cross" /></CloseButton>
        </SelectCoinsContainer>

        <PurchaseDetailsContainer>
          <CoinId></CoinId>
          <InputsContainer>
            <SearchInput></SearchInput>
            <AmtInput><input type="text" placeholder='purchase amount'/></AmtInput>
            <DateInput><input type="date" placeholder='purchase date'/></DateInput>
          </InputsContainer>
        </PurchaseDetailsContainer>

        <ButtonsContainer>
          <ButtonA>Close</ButtonA>
          <ButtonB>Save and Continue</ButtonB>
        </ButtonsContainer>

      </CoinShopForm>
    </CoinShopBackground>
  )
}

export default NewCoin