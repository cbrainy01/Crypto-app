import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { StyledCoinChart } from './CoinChart.styles'

export class CoinChart extends React.Component {
  lineColor = () => {
    const last = this.props.prices.length - 1;
    const initial = this.props.prices[0];
    const recent = this.props.prices[last];
    if (recent > initial) {
      return "#00FF5F8F";
    } else {
      return "red";
    }
  };

  render() {
    return (
      <StyledCoinChart>
        <Line
          data={{
            labels: [...Array(this.props.prices.length).keys()],
            datasets: [
              {
                data: this.props.prices,
                borderColor: this.lineColor(),
                backgroundColor: "pink",
              },
            ],
          }}
          options={{
            elements: {
              point: { radius: 0 },
            },
            scales: {
              y: {
                display: false,
                grid: {
                  display: false,
                },
              },
              x: {
                display: false,
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  title: function (context) {
                    return `Price: ${context[0].formattedValue}`;
                  },
                },
              },
            },
          }}
        />
      </StyledCoinChart>
    );
  }
}

export default CoinChart