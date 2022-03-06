import React from "react";
import {
  ExchangeContainer,
  ExchangeBar,
  CurrencyFill,
  InputBar,
} from "./CurrencyExchange.styles";
import Exchange from "icons/Exchange.svg";

export class CurrencyExchange extends React.Component {
  state = {
    focus: null,
    currencyInput: 0.0,
    coinInput: 0.0,
  };

  handleChange = (e) => {
    if (isNaN(e.target.value)) {
      return;
    } else if (this.state.focus === "currency") {
      const userCurrencyInput = e.target.value;
      const exchangeValue = userCurrencyInput / this.props.currentPrice;
      this.setState({
        currencyInput: e.target.value,
        coinInput: exchangeValue.toFixed(5),
      });
    } else if (this.state.focus === "coin") {
      const userCoinInput = e.target.value;
      const exchangeValue = this.props.currentPrice * userCoinInput;
      this.setState({
        coinInput: e.target.value,
        currencyInput: exchangeValue.toFixed(5),
      });
    }
  };

  render() {
    return (
      <ExchangeContainer>
        <ExchangeBar>
          <CurrencyFill>{this.props.currency}</CurrencyFill>
          <InputBar
            onFocus={() => this.setState({ focus: "currency" })}
            value={this.state.currencyInput}
            onChange={this.handleChange}
          ></InputBar>
        </ExchangeBar>
        <img alt="exchange" src={Exchange} />
        <ExchangeBar>
          <CurrencyFill>{this.props.coin}</CurrencyFill>
          <InputBar
            onFocus={() => this.setState({ focus: "coin" })}
            value={this.state.coinInput}
            onChange={this.handleChange}
          ></InputBar>
        </ExchangeBar>
      </ExchangeContainer>
    );
  }
}

export default CurrencyExchange;
