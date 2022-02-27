import styled from "styled-components";

export const StyledCoin = styled.tr``

export const TH = styled.th``

export const TD = styled.td`
    div {
        display: flex;
    }
    img {
        height: 33px;
        width: 33px;
    }
    p {
        cursor: pointer;
    }
`

export const ProgressDisplay = styled.div`
    width: 50px;
    height: 8px;
    background: blue;
    border-radius: 5px;
    div {
        background: pink;
        position: relative;
        border-radius: 5px;
        width: ${ (props) => props.percentage }%;
    }
`

export const MarketCap = styled.div`
    flex-direction: column;
    img{
        height: 8px;
        width: 8px;
    }
`