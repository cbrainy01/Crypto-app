import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "components";
import {CoinList, CoinPage, Portfolio} from "pages";
import './App.css';

class App extends React.Component {
  render() { 
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/coinpage" component={CoinPage}/>
          <Route exact path="/" component={CoinList}/>
        </Switch>
      </Router>
  )};
}

export default App;
