import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "components";
import {CoinList, CoinPage, Portfolio} from "pages";
import './App.css';

class App extends React.Component {

  state = {
    currency: "usd"
  }

  handleCurrencyChange = (newCurrency) => {
    this.setState({ currency: newCurrency })
  }

  render() { 
    return(
      <Router>
        <Navbar handleCurrencyChange={this.handleCurrencyChange} currency={this.state.currency}/>
        <Switch>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route exact path="/coinpage">
            <CoinPage/>
          </Route>
          <Route exact path="/">
            <CoinList currency={this.state.currency}/>
          </Route>
        </Switch>
      </Router>
  )};
}

export default App;
