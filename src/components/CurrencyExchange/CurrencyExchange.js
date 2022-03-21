import React, { useState } from "react";
import { getCurrencySymbol } from "utils";
import {
  ExchangeContainer,
  ExchangeBar,
  CurrencyFill,
  InputBar,
  ExchangeWrap,
} from "./CurrencyExchange.styles";
import Exchange from "icons/Exchange.svg";

export function CurrencyExchange(props) {
  const { currentPrice, currency, coin } = props;

  const [focus, setFocus] = useState(null);
  const [currencyInput, setCurrencyInput] = useState(0.0);
  const [coinInput, setCoinInput] = useState(0.0);
  const currencySymbol = getCurrencySymbol(currency)

  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      return;
    } else if (focus === "currency") {
      const userCurrencyInput = e.target.value;
      const exchangeValue = userCurrencyInput / currentPrice;

      setCurrencyInput(e.target.value);
      setCoinInput(exchangeValue);
    } else if (focus === "coin") {
      const userCoinInput = e.target.value;
      const exchangeValue = currentPrice * userCoinInput;

      setCoinInput(e.target.value);
      setCurrencyInput(exchangeValue);
    }
  };

  return (
    <ExchangeContainer>
      <ExchangeWrap>
      <ExchangeBar>
        <CurrencyFill><p>{currency.toUpperCase()}</p></CurrencyFill>
        <InputBar
          onFocus={() => setFocus("currency")}
          value={currencyInput}
          onChange={handleChange}
        ></InputBar>
      </ExchangeBar>
      <img alt="exchange" src={Exchange} />
      <ExchangeBar>
        <CurrencyFill><p>{coin.toUpperCase()}</p></CurrencyFill>
        <InputBar
          onFocus={() => setFocus("coin")}
          value={coinInput}
          onChange={handleChange}
        />
      </ExchangeBar>
      </ExchangeWrap>
    </ExchangeContainer>
  );
}

export default CurrencyExchange;