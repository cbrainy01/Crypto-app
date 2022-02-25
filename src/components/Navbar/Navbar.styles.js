import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledNavbar = styled.div`
    display: flex;
    background: ${(props) => props.theme.main };
    width: 100%;
    padding-block: 4px;
`
export const LeftNavbar= styled.div`
    display: flex;
    margin-left: 50px;
    margin-right: 35%;
    align-items: center;
`
export const RightNavbar= styled.div`
    display: flex;
`
export const LinkContainer= styled.div`
    background: ${(props) => props.text === "coinlist" ?  props.theme.inner : props.theme.main};
    border-radius: 10px;
`
export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.color};
    height: 38px;
    width: 100px;
    align-items: center;
    font-weight: 600;
    justify-content: center;
    display: flex;
    text-decoration: none;
`
export const SearchContainer= styled.div`
    display: flex;
    background: ${(props) => props.theme.inner};
    border-radius: 10px;
    height: 38px;
    align-items: center;
    justify-content: space-around;
    input {
        width: 80%;
        outline: none;
        border: none;
        background: ${(props) => props.theme.inner};
        height: 90%;
    }
`
export const DropdownContainer= styled.div`
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 100px;
    background: ${(props) => props.theme.inner};

    select {
        border: none;
        outline: none;
        background: ${(props) => props.theme.inner};
        color: ${(props) => props.theme.color};
    }
    p {
        background: black;
        border-radius: 50%;
        width: 20px;
        color: limegreen;
        text-align: center;
        font-weight: 600;
    }
`
export const ThemeToggleContainer= styled.div`
    border-radius: 10px;
    background: ${(props) => props.theme.inner};
    display: flex;
    justify-content: center;
    height: 38px;
    width: 47px;
    img {
        margin: auto;
    }
`
export const CurrencyDropdown = styled.div``
