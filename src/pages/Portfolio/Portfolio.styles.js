import styled from "styled-components";

export const StyledPortfolioPage = styled.div`
`

export const AssetButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 37px auto 17px auto;
`

export const AssetButtonWrap = styled.div`
    background: #06D554;
    width: 253px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    @media (max-width: 602px) {
        width: 100%;
    }
`

export const AssetButton = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
`