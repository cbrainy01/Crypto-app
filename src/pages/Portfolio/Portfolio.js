import axios from "axios";
import React, { useState, useEffect } from "react";
import { PurchasedCoins, CoinShop } from "components";
import { useSelector, useDispatch } from "react-redux";
import { coinShopDisplay } from "store/portfolioInfo/actions";
import {
  AssetButton,
  AssetButtonWrap,
  AssetButtonContainer,
} from "./Portfolio.styles";
import { resetForm } from "store/shopForm/actions";

function Portfolio() {
    const dispatch = useDispatch();
    const showCoinShop = useSelector((state) => state.portfolioInfo.showCoinShop)
    const [purchasedCoins, setPurchasedCoins] = useState(null);
  const [err, setErr] = useState(null);
  const [showNewCoin, setShowNewCoin] = useState(false);

  const coinId = "bitcoin";
  async function getData() {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
      );
      setPurchasedCoins(data);
    } catch (err) {
      console.error(err);
      setErr(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {purchasedCoins && (
        <div>
          <AssetButtonContainer>
            <AssetButtonWrap onClick={() => { dispatch(resetForm()); dispatch(coinShopDisplay()) }}>
              <AssetButton >Add Asset</AssetButton>
            </AssetButtonWrap>
          </AssetButtonContainer>
          <PurchasedCoins data={purchasedCoins} />
          {showCoinShop && <CoinShop/>}
        </div>
        
      )}
      
    </>
  );
}

export default Portfolio;
