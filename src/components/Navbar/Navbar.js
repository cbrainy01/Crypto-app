import React from "react";
import axios from "axios";
import { NavbarGlobal } from "components";
import { StyledNavbar, StyledLink } from "./Navbar.styles";

export default class Navbar extends React.Component {
    
    state = {
        isLoading: false,
        error: null,
        globalData: null,
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
        return(
            <StyledNavbar>
                <StyledLink to={`/`}>CoinList</StyledLink>
                <StyledLink to="/coinpage">Coinpage</StyledLink>
                <StyledLink to="/portfolio">Portfolio</StyledLink>
                <select onChange={this.handleChange}>
                    <option value={"usd"}>USD</option>
                    <option value={"btc"}>BTC</option>
                    <option value={"eth"}>ETH</option>
                    <option value={"eur"}>EUR</option>
                    <option value={"gbp"}>GBP</option>
                </select>
                <NavbarGlobal currency={this.props.currency} globalData={this.state.globalData}/>
            </StyledNavbar>
        )
    }
}