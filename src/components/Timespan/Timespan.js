import React, { Component } from 'react'
import { StyledTimespan } from './Timespan.styles'

export class Timespan extends Component {

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