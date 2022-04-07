import React, { useState } from "react";
import { getCurrencySymbol } from "utils";
import Exchange from "icons/Exchange.svg";
import {
  ExchangeContainer,
  ExchangeBar,
  CurrencyFill,
  InputBar,
  ExchangeWrap,
  SymbolFill,
} from "./CurrencyExchange.styles";


export function CurrencyExchange(props) {
  const { currentPrice, currency, coin } = props;

  const [focus, setFocus] = useState(null);
  const [currencyInput, setCurrencyInput] = useState(0.0);
  const [coinInput, setCoinInput] = useState(0.0);
  const currencySymbol = getCurrencySymbol(currency);

  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      return;
    } else if (focus === "currency") {
      const userCurrencyInput = e.target.value;
      const exchangeValue = (userCurrencyInput / currentPrice).toFixed(5);

      setCurrencyInput(e.target.value);
      setCoinInput(exchangeValue);
    } else if (focus === "coin") {
      const userCoinInput = e.target.value;
      const exchangeValue = (currentPrice * userCoinInput).toFixed(5);

      setCoinInput(e.target.value);
      setCurrencyInput(exchangeValue);
    }
  };

  return (
    <ExchangeContainer>
      <ExchangeWrap>
        <ExchangeBar>
          <CurrencyFill>
            <p>{currency.toUpperCase()}</p>
          </CurrencyFill>
          <SymbolFill>
            <p>{currencySymbol}</p>
          </SymbolFill>
          <InputBar
            onFocus={() => setFocus("currency")}
            value={currencyInput}
            onChange={handleChange}
            placeholder="0.00000"
          ></InputBar>
        </ExchangeBar>
        <img alt="exchange" src={Exchange} />
        <ExchangeBar>
          <CurrencyFill>
            <p>{coin.toUpperCase()}</p>
          </CurrencyFill>
          <SymbolFill>
            <p>{coin.toUpperCase()}</p>
          </SymbolFill>
          <InputBar
            onFocus={() => setFocus("coin")}
            value={coinInput}
            onChange={handleChange}
            placeholder="0.00000"
          />
        </ExchangeBar>
      </ExchangeWrap>
    </ExchangeContainer>
  );
}

export default CurrencyExchange;
