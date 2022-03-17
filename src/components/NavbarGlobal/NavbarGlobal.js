import React from "react";
import { formatNumber, getCurrencySymbol } from "utils";
import {
  StyledNavbarGlobal,
  MarketData1,
  MarketData2,
  MarketData3,
  MarketData4,
  MarketData5,
  MarketData6,
  NavbarGlobalContainer,
  ProgressBar,
} from "./NavbarGlobal.styles";
import Bitcoin from "icons/Bitcoin.svg";
import Bullet from "icons/Bullet.svg";
import Ethereum from "icons/Eth.svg";
import Uptick from "icons/Uptick.svg";

export function NavbarGlobal({ currency, globalData }) {
  const currencySymbol = getCurrencySymbol(currency);

  return (
    globalData && (
      <StyledNavbarGlobal>
        <NavbarGlobalContainer>
          <MarketData1>
            <p>Coins</p>
            <p>{globalData.active_cryptocurrencies}</p>
          </MarketData1>
          <MarketData2>
            <p>Exchange</p>
            <p>{globalData.markets}</p>
          </MarketData2>
          <MarketData3>
            <img src={Bullet} alt="bullet point" />
            <p>
              {currencySymbol}
              {formatNumber(globalData.total_market_cap[currency])}
            </p>
            <img src={Uptick} alt="uptick" />
          </MarketData3>
          <MarketData4>
            <img src={Bullet} alt="bullet point" />
            <div>
              {currencySymbol}
              {formatNumber(globalData.total_volume[currency])}
            </div>
            <ProgressBar
              percentage={Math.round(
                (globalData.total_volume[currency] /
                  globalData.total_market_cap[currency]) *
                  100
              )}
            >
              <div></div>
            </ProgressBar>
          </MarketData4>

          <MarketData5>
            <img src={Bitcoin} alt="bitcoin" />
            <div>{Math.round(globalData.market_cap_percentage["btc"])}%</div>
            <ProgressBar
              percentage={Math.round(globalData.market_cap_percentage["btc"])}
            >
              <div></div>
            </ProgressBar>
          </MarketData5>

          <MarketData6>
            <img src={Ethereum} alt="ethereum" />
            <div>{Math.round(globalData.market_cap_percentage["eth"])}%</div>
            <ProgressBar
              percentage={Math.round(globalData.market_cap_percentage["eth"])}
            >
              <div></div>
            </ProgressBar>
          </MarketData6>
        </NavbarGlobalContainer>
      </StyledNavbarGlobal>
    )
  );
}

export default NavbarGlobal;
