import React from 'react'
import { StyledTimespan } from './TImespan.styles'

export class Timespan extends React.Component {

    handleClick = (e) => { this.props.handleTimespanChange(e.target.getAttribute("data-value")) }

    render() {
    return (
        <StyledTimespan>
          <div onClick={this.handleClick} data-value={"1week"}>1w</div>
          <div onClick={this.handleClick} data-value={1}>1m</div>
          <div onClick={this.handleClick} data-value={3}>3m</div>
          <div onClick={this.handleClick} data-value={6}>6m</div>
          <div onClick={this.handleClick} data-value={12}>1y</div> 
        </StyledTimespan>
    )
  }
}

export default Timespan 