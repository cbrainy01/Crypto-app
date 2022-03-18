import React from 'react'
import { StyledTimespan, TimespanContainer  } from './TImespan.styles'

export function Timespan({handleTimespanChange}) {

    const handleClick = (e) => { handleTimespanChange(e.target.getAttribute("data-value")) }

    return (
        <StyledTimespan>
          <TimespanContainer>
            <div onClick={handleClick} data-value={"1week"}>1w</div>
            <div onClick={handleClick} data-value={1}>1m</div>
            <div onClick={handleClick} data-value={3}>3m</div>
            <div onClick={handleClick} data-value={6}>6m</div>
            <div onClick={handleClick} data-value={12}>1y</div>
          </TimespanContainer> 
        </StyledTimespan>
    )
}

export default Timespan 