import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledNavbar = styled.div`
    display: flex;
    background: #e0ca67;
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
    background: grey;
    border-radius: 10px;
`
export const StyledLink = styled(Link)`
    color: red;
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
    background: pink;
    border-radius: 10px;
    height: 38px;
    align-items: center;
    justify-content: space-around;
    // background: ${(props) => props.theme.inner};
    input {
        width: 80%;
        outline: none;
        border: none;
        background: pink;
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
    background: green;

    select {
        border: none;
        outline: none;
        background: green;
    }
    p {
        background: white;
        border-radius: 50%;
        width: 20px;
        text-align: center;
        font-weight: 600;
    }
`
export const ThemeToggleContainer= styled.div`
    border-radius: 10px;
    background: grey;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 47px;
`
export const CurrencyDropdown = styled.div``
