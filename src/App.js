import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "components";
import { CoinList, CoinPage, Portfolio } from "pages";
import { getCurrencySymbol } from "utils";
import { GlobalStyle, Container, darkTheme, lightTheme } from "styling";
import './App.css';

class App extends React.Component {
  state = {
    currency: "usd",
    isBlacked: true,
  }

  componentDidMount() {
    const currency = localStorage.getItem("currency") || "usd"
    const isBlacked = localStorage.getItem("isBlacked") || true
    this.setState({ currency: currency, isBlacked: isBlacked })
  }
  
  handleCurrencyChange = (newCurrency) => {
    const currencySymbol = getCurrencySymbol(newCurrency)
    localStorage.setItem("currency", newCurrency)
    this.setState({ currency: newCurrency })
  }

  handleThemeChange = () => {
    this.setState({ isBlacked: !this.state.isBlacked })
    localStorage.setItem("isBlacked", true)
  }

  render() { 
    return (
      <ThemeProvider theme={this.state.isBlacked ? darkTheme : lightTheme}>
        <Container>
          <GlobalStyle />
          <Router>
            <Navbar
              handleThemeChange={this.handleThemeChange}
              handleCurrencyChange={this.handleCurrencyChange}
              currency={this.state.currency}
            />
            <Switch>
              <Route
                exact
                path="/portfolio"
                component={(props) => <Portfolio {...props} currency={this.state.currency} />}
              />
              <Route
                exact
                path="/coinpage/:coin"
                component={(props) => <CoinPage {...props} currency={this.state.currency} />}
              />
              <Route
                exact
                path="/"
                component={(props) => (
                  <CoinList {...props} currency={this.state.currency} />
                )}
              />
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    );
  };
}

export default App;
