import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div``;

export const StyledNavbar = styled.div`
  display: flex;
  flex-flow: row;
  background: ${(props) => props.theme.main};
  width: 100%;
  height: 48px;
  justify-content: space-around;
  align-items: center;
  padding-left: 47px;
`;

export const LeftNavbar = styled.div`
  display: flex;
  width: 902px;
  align-items: center;
`;

export const LinkContainer = styled.div`
  background: ${(props) =>
    props.text === "coins" ? props.theme.inner : props.theme.main};
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  font-size: 12px;
  padding: 6px 25px 6px 25px;
`;

export const RightNavbar = styled.div`
  display: flex;
  flex-flow: row;
  width: 580px;
`;

export const SearchContainer = styled.div`
  width: 255px;
  display: flex;
  flex-flow: row;
  background: ${(props) => props.theme.inner};
  border-radius: 10px;
  height: 32px;
  align-items: center;
  padding-left: 10px;
  margin-right: 13px;
  img {
    height: 10px;
    width: 10px;
    margin-right: 7px;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.inner};
  }
`;

export const DropdownContainer = styled.div`
  width: 66px;
  display: flex;
  flex-flow: row;
  align-items: center;
  border-radius: 10px;
  margin-right: 12px;
  height: 32px;
  background: ${(props) => props.theme.inner};

  select {
    font-size: 8px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.inner};
    border: 1px solid ${(props) => props.theme.inner};
    cursor: pointer;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><polygon points="0,0 100,0 50,50" style="fill:%2300fc2a;" /></svg>');
    background-position: right 10px top 50%;
    background-repeat: no-repeat;
    background-size: 5px;
    padding-right: 20px;
    &:focus {
      outline: none;
    }
  }

  option {
    font-size: 10px;
  }

  span {
    margin-left: 5px;
    background: black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    font-size: 11px;
    color: limegreen;
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
  span p {
    margin-top: 1.5px;
  }
`;

export const ThemeToggleContainer = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.inner};
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
  img {
    margin: auto;
    height: 16px;
    width: 16px;
  }
`;

export const CurrencyDropdown = styled.div`
  display: flex;
  width: 26px;
  margin-left: 6px;
`;

