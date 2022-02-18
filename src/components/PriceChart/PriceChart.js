import React from 'react';
import axios from "axios";
import Chart from "chart.js/auto";
import wordedDate from 'utils/wordedDate';
import { Line } from "react-chartjs-2";
import { StyledPriceChart } from './PriceChart.styles';
import { getPreviousDates, formatOverviewNumber, startDate } from "utils"

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
          const {currency, timeSpan} = this.props
          
          function span(timeSpan) {
            if(timeSpan === "1week") { return "1week" }
            else if(timeSpan == 1) { return 30 }
            else if(timeSpan == 3) { return 90}
            else if(timeSpan == 6) { return 180}
            else if(timeSpan == 12) { return 360}
          }
            
            const response = await axios(
            `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${ timeSpan === "1week" ? 7 : span(timeSpan) }&interval=daily`
          );
          const priceData = response.data.prices
            .map((price) => price[1])
            .slice(1, ( timeSpan === "1week"? 8 : span(timeSpan) + 1 ) );
          this.setState({ isLoading: false, priceData: priceData, todaysPrice: response.data.prices[0][1] });
        } 
        catch (err) {
            console.error(err)
            this.setState({ isLoading: false, error: err });
        }
    };

    componentDidMount() {
        this.getMarketChartData()
    }
    componentDidUpdate(prevProps) {
        if(prevProps.currency !== this.props.currency || prevProps.timeSpan !== this.props.timeSpan) {
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
            <p>Timespan: {this.props.timeSpan}</p>
            <Line
                data={{
                    labels: getPreviousDates(startDate(), this.props.timeSpan),
                    datasets: [{
                        data: this.state.priceData,
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)"
                    }],    
                }}

                options={{
                    scales: {
                        y: {
                            ticks: {
                                callback: function(value, index, ticks) {
                                    return value;
                                }
                            }
                        },
                        x: {
                            ticks: {
                                callback: function(val, index) {
                                  const day = this.getLabelForValue(val).split("-")[1]
                                  return day
                                },
                            }
                        }
                
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                            title: function(context) { console.log("title context: ", context); return `Price: ${context[0].formattedValue}` },
                            label: function(context) { console.log("label context: ", context); return `date: ${context.label}` } },
                        }
                    }
                    
                }}
            />
        </StyledPriceChart>
    )
  }
}

export default PriceChart