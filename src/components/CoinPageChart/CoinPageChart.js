import React from 'react'
import { Line } from "react-chartjs-2";
import { getPreviousHours } from 'utils';
import { RadioButton, RadioContainer, StyledCoinPageChart, RadioLabel } from './CoinPageChart.styles'

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
          <RadioLabel>
            <RadioButton
              onChange={this.handleTimespanChange}
              type="radio"
              checked={this.state.timespan == 12}
              value={12}
              name="12h"
            />
            <div></div>12h
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              onChange={this.handleTimespanChange}
              type="radio"
              checked={this.state.timespan == 24}
              value={24}
              name="1d"
            />
            <div></div>1d
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              onChange={this.handleTimespanChange}
              type="radio"
              checked={this.state.timespan == 72}
              value={72}
              name="3d"
            />
            <div></div>3d
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              onChange={this.handleTimespanChange}
              type="radio"
              checked={this.state.timespan == 120}
              value={120}
              name="5d"
            />
            <div></div>5d
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              onChange={this.handleTimespanChange}
              type="radio"
              checked={this.state.timespan == 168}
              value={168}
              name="7d"
            />
            <div></div>7d
          </RadioLabel>
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