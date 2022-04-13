import React from "react";
import { changeCurrency, toggleTheme } from "store/universalVariables/actions";
import { getCurrencySymbol } from "utils";
import { useSelector, useDispatch } from "react-redux";
import Theme from "icons/Theme.svg";
import {
  DropdownContainer,
  CurrencyDropdown,
  ThemeToggleContainer,
} from "components/Navbar/Navbar.styles";
import {
  PageName,
  StyledMobileNavtop,
  NavLeft,
  NavRight,
} from "./MobileNavTop.styles";

function MobileNavtop() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.universalVariables.currency);
  const pageName = useSelector((state) => state.universalVariables.pageName);
  const isBlacked = useSelector((state) => state.universalVariables.isBlacked);

  return (
    <StyledMobileNavtop>
      <NavLeft>
        <PageName>{pageName}</PageName>
      </NavLeft>
      <NavRight>
        <DropdownContainer>
          <span>
            <p>{getCurrencySymbol(currency)}</p>
          </span>
          <CurrencyDropdown>
            <select
              value={currency}
              onChange={(e) => dispatch(changeCurrency(e.target.value))}
            >
              <option value={"usd"}>USD</option>
              <option value={"btc"}>BTC</option>
              <option value={"eth"}>ETH</option>
              <option value={"eur"}>EUR</option>
              <option value={"gbp"}>GBP</option>
            </select>
          </CurrencyDropdown>
        </DropdownContainer>
        <ThemeToggleContainer onClick={() => dispatch(toggleTheme(!isBlacked))}>
          <img src={Theme} alt="theme change icon" />
        </ThemeToggleContainer>
      </NavRight>
    </StyledMobileNavtop>
  );
}

export default MobileNavtop;
