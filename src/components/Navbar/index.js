import React from "react";
import { StyledNavbar, StyledLink } from "./Navbar.styles";

export default class Navbar extends React.Component {
    render() {
        return(
            <StyledNavbar>
                <StyledLink to="/">CoinList</StyledLink>
                <StyledLink to="/coinpage">Coinpage</StyledLink>
                <StyledLink to="/portfolio">Portfolio</StyledLink>
            </StyledNavbar>
        )
    }
}