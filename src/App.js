import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "components";
import { CoinList, CoinPage, Portfolio } from "pages";
import { getCurrencySymbol } from "utils";
import { GlobalStyle, Container, darkTheme, lightTheme } from "styling";
import './App.css';
import { history } from 'utils';

class App extends React.Component {
  state = {
    currency: "usd",
    isBlacked: true,
  }

  componentDidMount() {
    const currency = localStorage.getItem("currency") || "usd"
    this.setState({ currency: currency })
  }
  
  handleCurrencyChange = (newCurrency) => {
    const currencySymbol = getCurrencySymbol(newCurrency)
    localStorage.setItem("currency", newCurrency)
    this.setState({ currency: newCurrency })
  }

  handleThemeChange = () => {
    this.setState({ isBlacked: !this.state.isBlacked }) 
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
              history={history}
            />
            <Switch>
              <Route
                exact
                path="/portfolio"
                component={(props) => <Portfolio {...props} />}
              />
              <Route
                exact
                path="/coinpage/:coin"
                component={(props) => <CoinPage {...props} />}
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
