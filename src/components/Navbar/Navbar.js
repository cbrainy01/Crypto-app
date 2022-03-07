import React from "react";
import axios from "axios";
import { NavbarGlobal, CoinSearch } from "components";
import { getCurrencySymbol } from "utils";
import { StyledNavbar, StyledLink, LeftNavbar, RightNavbar, LinkContainer, SearchContainer, DropdownContainer, CurrencyDropdown, ThemeToggleContainer, } from "./Navbar.styles";
import SearchIcon from "../../icons/SearchIcon.svg"
import Theme from "../../icons/Theme.svg"

export default class Navbar extends React.Component {
  state = {
    isLoading: false,
    error: null,
    globalData: null,
  };

  getGlobalCoinsData = async () => {
    this.setState({ isLoading: true });
    const response = await axios("https://api.coingecko.com/api/v3/global");
    this.setState({
      isLoading: false,
      globalData: response.data.data,
    });
  };

  componentDidMount() {
    try {
      this.getGlobalCoinsData();
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err,
      });
    }
  }

    getGlobalCoinsData = async () => {
        this.setState({ isLoading: true })
        const response = await axios("https://api.coingecko.com/api/v3/global")
        this.setState({
            isLoading: false,
            globalData: response.data.data
        })
    }

    componentDidMount() {
        try {
            this.getGlobalCoinsData()
        }
        catch(err) {
            this.setState({
                isLoading: false,
                error: err
            })
        }
    }

    handleChange = (e) => {
        this.props.handleCurrencyChange(e.target.value)
    }

    render() {
        return (
          <div>
            <StyledNavbar>
              <LeftNavbar>
                <LinkContainer text="coinlist">
                  <StyledLink to={"/"}>CoinList</StyledLink>
                </LinkContainer>
                <LinkContainer text="portfolio">
                  <StyledLink to="/portfolio">Portfolio</StyledLink>
                </LinkContainer>
              </LeftNavbar>
              <RightNavbar>
                <SearchContainer>
                    <img src={SearchIcon} alt="search icon"/>
                    <CoinSearch/>
                </SearchContainer>
                <DropdownContainer>
                  <p>{getCurrencySymbol(this.props.currency)}</p>
                  <CurrencyDropdown>
                    <select value={this.props.currency} onChange={this.handleChange}>
                      <option value={"usd"}>USD</option>
                      <option value={"btc"}>BTC</option>
                      <option value={"eth"}>ETH</option>
                      <option value={"eur"}>EUR</option>
                      <option value={"gbp"}>GBP</option>
                    </select>
                  </CurrencyDropdown>
                </DropdownContainer>
                <ThemeToggleContainer onClick={ () => this.props.handleThemeChange() }>
                  <img src={Theme} alt="theme change icon"/>
                </ThemeToggleContainer>
              </RightNavbar>
            </StyledNavbar>
            <NavbarGlobal currency={this.props.currency} globalData={this.state.globalData}/>
          </div>
        );
    }
}
