import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "components";
import { CoinList, CoinPage, Portfolio } from "pages";
import { getCurrencySymbol, useLocalState } from "utils";
import { GlobalStyle, Container, darkTheme, lightTheme } from "styling";
import "./App.css";

function App() {
  const [currency, setCurrency] = useLocalState("currency", "usd");
  const [isBlacked, setIsBlacked] = useLocalState("isBlacked", true);

  const handleCurrencyChange = (newCurrency) => {
    const currencySymbol = getCurrencySymbol(newCurrency);
    localStorage.setItem("currency", newCurrency);
    localStorage.setItem("currencySymbol", currencySymbol);
    setCurrency(newCurrency);
  };

  const handleThemeChange = () => {
    localStorage.setItem("isBlacked", !isBlacked);
    setIsBlacked(!isBlacked);
  };

  return (
    <ThemeProvider theme={isBlacked ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Router>
          <Navbar
            handleThemeChange={handleThemeChange}
            handleCurrencyChange={handleCurrencyChange}
            currency={currency}
          />
          <Switch>
            <Route
              exact
              path="/portfolio"
              component={(props) => (
                <Portfolio {...props} currency={currency} />
              )}
            />
            <Route
              exact
              path="/coinpage/:coin"
              component={(props) => <CoinPage {...props} currency={currency} />}
            />
            <Route
              exact
              path="/"
              component={(props) => <CoinList {...props} currency={currency} />}
            />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
