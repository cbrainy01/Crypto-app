import styled from "styled-components";

export const ExchangeContainer = styled.div`
    display: flex;
    margin-left: 31.04%;
    margin-right: 29.89%;
    height: 30px;
    align-items: center; 
    margin-top: 5.7%;
    color: red;
    img {
        margin-right: 10px;
        width: 30px;
        height: 15px;
    }
`

export const ExchangeBar = styled.div`
    border-radius: 8px;
    background: ${(props) => props.theme.inner};
    display: flex;
    margin-right: 1.66%;
    input {
        all: unset;
        background: white;
        border-radius: 0px 8px 8px 0px;
    }
`

export const InputBar = styled.input`
    background: white;
    border-radius: 0px 8px 8px 0px;
    border: 2px solid red;
`

export const CurrencyFill = styled.div`
    font-size: 17px;
    background: limegreen;
    color: white; 
    border-radius: 8px 0px 0px 8px;
`