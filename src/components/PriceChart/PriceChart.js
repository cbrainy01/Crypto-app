import React from 'react'
import axios from "axios"
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2"
import wordedDate from 'utils/wordedDate';
import { StyledPriceChart } from './PriceChart.styles'
import { previous30Days } from 'utils/previous30Days'
import { formatOverviewNumber } from 'utils/formatNumber';

export class PriceChart extends React.Component {
    state = {
        isLoading: false,
        error: null,
        priceData: [],
        todaysPrice: null,
    }

    getMarketChartData = async () => {
        try {
          this.setState({ isLoading: true });
          const response = await axios(
            `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=30&interval=daily`
          );    
          const priceData = response.data.prices
            .map((price) => price[1])
            .slice(1, 31);
          this.setState({ isLoading: false, priceData: priceData, todaysPrice: response.data.prices[0][1] });
        } 
        catch (err) {
          this.setState({ isLoading: false, error: err });
        }
    };

    componentDidMount() {
        this.getMarketChartData()
    }
    componentDidUpdate(prevProps) {
        if(prevProps.currency !== this.props.currency) {
            this.getMarketChartData()
        }
    }

    render() {
        return (
        <StyledPriceChart>
            Price Chart
            <div>Price</div>
            <div>Todays price: { formatOverviewNumber(this.state.todaysPrice) }</div>
            <div>Todays date: { wordedDate(new Date) }</div>
            <Line
                data={{
                    labels: previous30Days(),
                    datasets: [{
                        data: this.state.priceData,
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)"
                    }]
                }}
            />
        </StyledPriceChart>
    )
  }
}

export default PriceChart