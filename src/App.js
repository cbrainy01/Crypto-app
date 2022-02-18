import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "components";
import {CoinList, CoinPage, Portfolio} from "pages";
import './App.css';

class App extends React.Component {
  state = {
    currency: "usd"
  }

  componentDidMount() {
    const currency = localStorage.getItem("currency") || "usd"
    this.setState({currency: currency})
  }
  
  handleCurrencyChange = (newCurrency) => {
    localStorage.setItem("currency", newCurrency)
    this.setState({currency: newCurrency})
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
