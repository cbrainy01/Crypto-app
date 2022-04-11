import React from 'react'
import { changeCurrency } from 'store/universalVariables/actions';
import { getCurrencySymbol } from 'utils';
import { useSelector, useDispatch } from "react-redux";
import { PageName, StyledMobileNavtop } from './MobileNavTop.styles'
import {
    DropdownContainer,
    CurrencyDropdown,
  } from "components/Navbar/Navbar.styles";

function MobileNavtop() {
    const dispatch = useDispatch()
    const currency = useSelector( (state) => state.universalVariables.currency )
  
    return (
    <StyledMobileNavtop>
    <PageName>Overview</PageName>
    <DropdownContainer>
            <span><p>{getCurrencySymbol(currency)}</p></span>
            <CurrencyDropdown>
              <select value={currency} onChange={(e) => dispatch(changeCurrency(e.target.value))}>
                <option value={"usd"}>USD</option>
                <option value={"btc"}>BTC</option>
                <option value={"eth"}>ETH</option>
                <option value={"eur"}>EUR</option>
                <option value={"gbp"}>GBP</option>
              </select>
            </CurrencyDropdown>
    </DropdownContainer>
    </StyledMobileNavtop>
  )
}

export default MobileNavtop