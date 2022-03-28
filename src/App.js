import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "components";
import { CoinList, CoinPage, Portfolio } from "pages";
import { getCurrencySymbol, useLocalState } from "utils";
import { GlobalStyle, Container, darkTheme, lightTheme } from "styling";
import { useSelector } from "react-redux";
import "./App.css";

function App(props) {
  const [currency, setCurrency] = useLocalState("currency", "usd");
  const isBlacked = useSelector((state) => state.isBlacked)
  
  return (
    <ThemeProvider theme={isBlacked ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Router>
          <Navbar />
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
              component={() => <CoinList />}
            />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
