import axios from "axios";
import React from "react";
import { ErrorDisplay } from "components";

export default class CoinPage extends React.Component {
  state = { 
    isLoading: false,
    error: null,
    coinData: null, 
  };

  getCoinData = async () => {
    this.setState({ isLoading: true })  
    try {
        const {data} = await axios(`https://api.coingecko.com/api/v3/coins/${this.props.match.params.coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`)    
        this.setState({ isLoading: false, coinData: data })
    }catch(err) {
        this.setState({ isLoading: false, error: err})
    }
  }

  componentDidMount = () => {
    this.getCoinData()
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.currency !== this.props.currency) {
        this.getCoinData()
    }
  }

  render() {
    return <div>
        Coin Page
        {this.state.error && <ErrorDisplay/>}
        <h1>{this.state.coinData?.name}</h1>
    </div>;
  }
}