import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTimeSpan } from 'store/universalVariables/actions'
import { StyledTimespan, TimespanButton, TimespanContainer } from './TImespan.styles'

export function Timespan() {
    const dispatch = useDispatch();
    const handleClick = (e) => { dispatch(changeTimeSpan(e.target.getAttribute("data-value"))) }
    const timeSpan = useSelector((state) => state.universalVariables.timeSpan)
    
    return (
        <StyledTimespan>
            <TimespanContainer>
            <TimespanButton selected={timeSpan === "1week"} onClick={handleClick} data-value={"1week"}>1w</TimespanButton>
            <TimespanButton selected={timeSpan === "1"} onClick={handleClick} data-value={1}>1m</TimespanButton>
            <TimespanButton selected={timeSpan === "3"} onClick={handleClick} data-value={3}>3m</TimespanButton>
            <TimespanButton selected={timeSpan === "6"} onClick={handleClick} data-value={6}>6m</TimespanButton>
            <TimespanButton selected={timeSpan === "12"} onClick={handleClick} data-value={12}>1y</TimespanButton>
            </TimespanContainer>
        </StyledTimespan>
    )
}

export default Timespan 