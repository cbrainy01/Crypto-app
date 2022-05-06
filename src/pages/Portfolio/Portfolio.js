import React from "react";
import { PurchasedCoins, CoinShop } from "components";
import { useSelector, useDispatch } from "react-redux";
import { coinShopDisplay } from "store/portfolioInfo/actions";
import { resetForm } from "store/shopForm/actions";
import {
  AssetButton,
  AssetButtonWrap,
  AssetButtonContainer,
  StyledPortfolioPage,
} from "./Portfolio.styles";

function Portfolio() {
  const dispatch = useDispatch();
  const showCoinShop = useSelector((state) => state.portfolioInfo.showCoinShop);

  const purchasedCs = useSelector((state) => state.portfolioInfo.purchasedCoins);
  console.log("portfolioINfo: ", purchasedCs)
  return (
    <StyledPortfolioPage>
      <AssetButtonContainer>
        <AssetButtonWrap
          onClick={() => {
            dispatch(resetForm());
            dispatch(coinShopDisplay());
          }}
        >
          <AssetButton>Add Asset</AssetButton>
        </AssetButtonWrap>
      </AssetButtonContainer>
      <PurchasedCoins />
      {showCoinShop && <CoinShop />}
    </StyledPortfolioPage>
  );
}

export default Portfolio;
