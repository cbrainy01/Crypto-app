import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavbarGlobal, CoinSearch } from "components";
import { getCurrencySymbol } from "utils";
import {
  StyledNavbar,
  StyledLink,
  LeftNavbar,
  RightNavbar,
  LinkContainer,
  SearchContainer,
  DropdownContainer,
  CurrencyDropdown,
  ThemeToggleContainer,
  NavbarContainer,
} from "./Navbar.styles";
import SearchIcon from "../../icons/SearchIcon.svg";
import Uptick from "icons/Uptick.svg"
import Theme from "../../icons/Theme.svg";

export default function Navbar(props) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [globalData, setGlobalData] = useState(null);

  const getGlobalCoinsData = async () => {
    setLoading(true);

    const response = await axios("https://api.coingecko.com/api/v3/global");
    setLoading(false);
    setGlobalData(response.data.data);
  };

  useEffect(() => {
    try {
      getGlobalCoinsData();
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, []);

  const handleChange = (e) => {
    props.handleCurrencyChange(e.target.value);
  };

  return (
    <NavbarContainer>
      <StyledNavbar>
        <LeftNavbar>
          <LinkContainer text="coins">
            <StyledLink to={"/"}>Coins</StyledLink>
          </LinkContainer>
          <LinkContainer text="portfolio">
            <StyledLink to="/portfolio">Portfolio</StyledLink>
          </LinkContainer>
        </LeftNavbar>
        <RightNavbar>
          <SearchContainer>
            <img src={SearchIcon} alt="search icon" />
            <CoinSearch />
          </SearchContainer>
          <DropdownContainer>
            <span><p>{getCurrencySymbol(props.currency)}</p></span>
            <CurrencyDropdown>
              <select value={props.currency} onChange={handleChange}>
                <option value={"usd"}>USD</option>
                <option value={"btc"}>BTC</option>
                <option value={"eth"}>ETH</option>
                <option value={"eur"}>EUR</option>
                <option value={"gbp"}>GBP</option>
              </select>
            </CurrencyDropdown>
            <img src={Uptick} />
          </DropdownContainer>
          <ThemeToggleContainer onClick={() => props.handleThemeChange()}>
            <img src={Theme} alt="theme change icon" />
          </ThemeToggleContainer>
        </RightNavbar>
      </StyledNavbar>
      <NavbarGlobal currency={props.currency} globalData={globalData} />
    </NavbarContainer>
  );
}
