import React from 'react'
import { StyledSummaryData } from './SummaryData.styles'
import Plus from "icons/Plus.svg"

export class SummaryData extends React.Component {
  render() {
    return (
      <StyledSummaryData>
        <div>
        <img src={Plus} alt="plus" />
        <p>S Data: </p>
        <p>
            {this.props.data} {this.props.symbol}
        </p>
        </div>
      </StyledSummaryData>
    )
  }
}

export default SummaryData