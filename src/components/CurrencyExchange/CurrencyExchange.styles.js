import styled from "styled-components";

export const ExchangeContainer = styled.div`
    padding: 0 298px 0 287px;
`

export const ExchangeWrap = styled.div`
    display: flex;
    width: 375px;
    height: 27px;
    align-items: center; 
    margin-top: 12px;
    color: ${(props) => props.theme.main};
    img {
        margin: auto 16px auto 16px;
        width: 12px;
        height: 9px;
    }
`

export const ExchangeBar = styled.div`
    border-radius: 4px;
    width: 166px;
    background: ${(props) => props.theme.inner};
    display: flex;
    // margin-right: 1.66%;
    // input {
    //     all: unset;
    //     background: white;
    //     border-radius: 0px 8px 8px 0px;
    // }
`

export const InputBar = styled.input`
    background: ${(props) => props.theme.inner};
    color: ${(props) => props.theme.color};
    height: 27px;
    width: 124px;
    border-radius: 0px 8px 8px 0px;
    outline: none;
    border: 1px solid #191B1F;
    font-size: 7px;
    padding-left: 9px;
`

export const CurrencyFill = styled.div`
    font-size: 8px;
    width: 41px;
    height: 27px;
    background: #06D554;
    color: white; 
    border-radius: 8px 0px 0px 8px;
    p {
        margin: auto 0;
        padding: 5px 12px;
        font-weight: 600;
    }
`