import React from 'react'
import { Line } from "react-chartjs-2";
import { getPreviousHours } from 'utils';
import { RadioButton, RadioContainer, StyledCoinPageChart } from './CoinPageChart.styles'

export class CoinPageChart extends React.Component {
  state = {
    timespan: 24,
  };

  handleTimespanChange = (e) => {
    this.setState({timespan: e.target.value})
  }

  render() {
    const lineData = this.props.data.slice(-this.state.timespan);
    const labels = getPreviousHours(this.state.timespan).reverse();
    return (
      <StyledCoinPageChart>
        <RadioContainer>
          <RadioButton onChange={this.handleTimespanChange} type="radio" checked={this.state.timespan == 12} value={12} name="12h"/>12h
          <RadioButton onChange={this.handleTimespanChange} type="radio" checked={this.state.timespan == 24} value={24} name="1d"/>1d
          <RadioButton onChange={this.handleTimespanChange} type="radio" checked={this.state.timespan == 72} value={72} name="3d"/>3d
          <RadioButton onChange={this.handleTimespanChange} type="radio" checked={this.state.timespan == 120} value={120} name="5d"/>5d
          <RadioButton onChange={this.handleTimespanChange} type="radio" checked={this.state.timespan == 168} value={168} name="7d"/>7d
        </RadioContainer>
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