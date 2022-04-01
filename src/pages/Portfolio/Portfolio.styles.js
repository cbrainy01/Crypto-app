import styled from "styled-components";

export const AssetButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 37px auto 17px auto;
`

export const AssetButtonWrap = styled.div`
    background: #06D554;
    width: 253px;
    padding: 12px 101px;
    border-radius: 6px;
    flex-shrink: 1;
    cursor: pointer;
`

export const AssetButton = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
`