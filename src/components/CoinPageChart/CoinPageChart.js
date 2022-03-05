import React from 'react'
import { Line } from "react-chartjs-2";
import { getPreviousHours } from 'utils';
import { StyledCoinPageChart } from './CoinPageChart.styles'

export class CoinPageChart extends React.Component {
  state = {
    timespan: 24,
  };

  handleTimespanChange = (e) => {
    this.setState({ timespan: e.target.value });
  };

  render() {
    const lineData = this.props.data.slice(-this.state.timespan);
    const labels = getPreviousHours(this.state.timespan).reverse();
    return (
      <StyledCoinPageChart>
        CoinPageChart
        <select onChange={this.handleTimespanChange}>
          <option value={12}>12h</option>
          <option value={24}>1d</option>
          <option value={72}>3d</option>
          <option value={120}>5d</option>
          <option value={168}>7d</option>
        </select>
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                data: lineData,
                borderColor: "grey",
              },
            ],
          }}
          options={{
            elements: {
              point: { radius: 3, backgroundColor: "limegreen" },
            },
            scales: {
              y: {
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  callback: function (value, index, ticks) {
                    return;
                  },
                },
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  callback: function (val, index) {
                    return;
                  },
                },
              },
            },
            plugins: {
              legend: { display: false },
            },
          }}
        />
      </StyledCoinPageChart>
    );
  }
}

export default CoinPageChart