import styled from "styled-components";

export const StyledPortfolioPage = styled.div`
`

export const AssetButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 37px auto 17px auto;
`

export const AssetButtonWrap = styled.div`
    background: #06D554;
    max-width: 253px;
    padding: 12px 101px;
    border-radius: 6px;
    cursor: pointer;
    @media (max-width: 292px) {
        padding: 10px 50px;
    }
`

export const AssetButton = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
`