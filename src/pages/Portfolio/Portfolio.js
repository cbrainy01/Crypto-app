import axios from "axios";
import React, { useState, useEffect } from "react";
import PurchasedCoins from "components/PurchasedCoins";
import {
  AssetButton,
  AssetButtonWrap,
  AssetButtonContainer,
} from "./Portfolio.styles";

function Portfolio() {
  const [purchasedCoins, setPurchasedCoins] = useState(null);
  const [err, setErr] = useState(null);

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
            <AssetButtonWrap>
              <AssetButton>Add Asset</AssetButton>
            </AssetButtonWrap>
          </AssetButtonContainer>
          <PurchasedCoins data={purchasedCoins} />
        </div>
      )}
    </>
  );
}

export default Portfolio;
