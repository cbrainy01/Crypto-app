import React from 'react'
import { StyledTimespan } from './TImespan.styles'

export function Timespan({handleTimespanChange}) {

    const handleClick = (e) => { handleTimespanChange(e.target.getAttribute("data-value")) }

    return (
        <StyledTimespan>
          <div onClick={handleClick} data-value={"1week"}>1w</div>
          <div onClick={handleClick} data-value={1}>1m</div>
          <div onClick={handleClick} data-value={3}>3m</div>
          <div onClick={handleClick} data-value={6}>6m</div>
          <div onClick={handleClick} data-value={12}>1y</div> 
        </StyledTimespan>
    )
}

export default Timespan 