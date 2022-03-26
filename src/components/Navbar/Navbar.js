import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavbarGlobal, CoinSearch } from "components";
import { getCurrencySymbol } from "utils";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  StyledNavbar,
  StyledLink,
  LeftNavbar,
  RightNavbar,
  LinkContainer,
  SearchContainer,
  StyledSearchIcon,
  DropdownContainer,
  CurrencyDropdown,
  ThemeToggleContainer,
  NavbarContainer,
} from "./Navbar.styles";
import SearchIcon from "../../icons/SearchIcon.svg";
import Theme from "../../icons/Theme.svg";
import { changeCurrency } from "store/currency/actions"
import { toggleTheme } from "store/isBlacked/actions";

import { getCurrency } from "store/currency/currencyReducer";

export default function Navbar(props) {
// function Navbar(props) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [globalData, setGlobalData] = useState(null);

  // const getGlobalCoinsData = async () => {
  //   setLoading(true);

  //   const response = await axios("https://api.coingecko.com/api/v3/global");
  //   setLoading(false);
  //   setGlobalData(response.data.data);
  // };

  // useEffect(() => {
  //   try {
  //     getGlobalCoinsData();
  //   } catch (err) {
  //     setLoading(false);
  //     setError(err);
  //   }
  // }, []);
  const isBlacked = useSelector((state) => state.isBlacked)
  const currency = useSelector((state) => getCurrency(state))
  const dispatch = useDispatch()
  // const handleChange = (e) => {
  //   props.handleCurrencyChange(e.target.value);
  // };

  return (
    <NavbarContainer>
      <StyledNavbar>
        <LeftNavbar>
        {/* <button onClick={console.log("supp")}>click me</button> */}

          <LinkContainer text="coins">
            <StyledLink to={"/"}>Coins</StyledLink>
          </LinkContainer>
          <LinkContainer text="portfolio">
            <StyledLink to="/portfolio">Portfolio</StyledLink>
          </LinkContainer>
        </LeftNavbar>
        <RightNavbar>
          <SearchContainer>
            <StyledSearchIcon alt="search icon" src={SearchIcon}/>
            <CoinSearch />
          </SearchContainer>
          <DropdownContainer>
            <span><p>{getCurrencySymbol(currency)}</p></span>
            <CurrencyDropdown>
              {/* <select value={props.currency} onChange={handleChange}> */}
              {/* <select value={props.currency} onChange={(e) => props.changeCurrency(e.target.value)}> */}
              <select value={currency} onChange={(e) => dispatch(changeCurrency(e.target.value))}>
                <option value={"usd"}>USD</option>
                <option value={"btc"}>BTC</option>
                <option value={"eth"}>ETH</option>
                <option value={"eur"}>EUR</option>
                <option value={"gbp"}>GBP</option>
              </select>
            </CurrencyDropdown>
          </DropdownContainer>
          {/* <ThemeToggleContainer onClick={() => props.handleThemeChange()}> */}
          {/* <ThemeToggleContainer onClick={() => console.log("boppity boozz")  }> */}
          <ThemeToggleContainer onClick={() =>  dispatch(toggleTheme(!isBlacked)) }>
            <img src={Theme} alt="theme change icon" />
          </ThemeToggleContainer>
        </RightNavbar>
      </StyledNavbar>
      {/* <NavbarGlobal currency={props.currency} globalData={globalData} /> */}
      <NavbarGlobal currency={props.currency} />
    </NavbarContainer>
  );
}


// const mapStateToProps = (state) => ({
//   currency: getCurrency(state),
// });

// const mapDispatchToProps = {
//   changeCurrency,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)