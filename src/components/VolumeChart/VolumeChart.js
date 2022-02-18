import React from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { StyledVolumeChart } from './VolumeChart.styles'
import { previous30Days } from 'utils/getPreviousDates'
import { formatOverviewNumber, wordedDate } from "utils";

export class VolumeChart extends React.Component {
    state = {
        isLoading: false,
        error: null,
        volumeData: [],
        todaysVolume: null
    };

    getMarketChartData = async () => {
        try {
          this.setState({ isLoading: true });
          const response = await axios(
            `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=30&interval=daily`
          );
          const volumeData = response.data.total_volumes
            .map((price) => price[1])
            .slice(1, 31);
          this.setState({
            isLoading: false,
            volumeData: volumeData,
            todaysVolume: response.data.total_volumes[0][1]
          });
        } catch (err) {
          console.error("error: ", err);
          this.setState({ isLoading: false, error: err });
        }
    };

    componentDidMount() {
        this.getMarketChartData();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.currency !== this.props.currency) {
          this.getMarketChartData();
        }
    }
 
    render() {
    return (
    <StyledVolumeChart>
        VolumeChart
        <div>Volume 24h</div>
        <div>Todays volume: { formatOverviewNumber(this.state.todaysVolume) }</div>
        <div>Todays date: { wordedDate(new Date) }</div>
        <Bar
          data={{
            labels: previous30Days(),
            datasets: [
              {
                data: this.state.volumeData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              }
            ]
          }}
        />
    </StyledVolumeChart>
    )
  }
}

export default VolumeChart