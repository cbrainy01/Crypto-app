import React from "react";
import { formatNumber, progressBar, getCurrencySymbol } from "utils";
import {
  StyledNavbarGlobal,
  MarketData1,
  MarketData2,
  MarketData3,
  MarketData4,
  MarketData5,
  MarketData6,
  MarketDataContainer,
  NavbarGlobalContainer,
} from "./NavbarGlobal.styles";
import Bitcoin from "../../icons/Bitcoin.svg";
import Bullet from "../../icons/Bullet.svg";
import Ethereum from "../../icons/Eth.svg";

export function NavbarGlobal({ currency, globalData }) {
  const currencySymbol = getCurrencySymbol(currency);
    // console.log("TST: ", formatNumber(globalData.total_market_cap[currency]))
//     console.log("TST: ", globalData.total_market_cap[currency])
//     console.log("curr: ", currency.length)
//   console.log("globalData: ", globalData)
  return (
    globalData && (
      <StyledNavbarGlobal>
        <NavbarGlobalContainer>
          <MarketDataContainer>
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
              <p>^</p>
            </MarketData3>
            <MarketData4>
              <img src={Bullet} alt="bullet point" />
              <div>
                {currencySymbol}
                {formatNumber(globalData.total_volume[currency])}
              </div>
              <div>
                {progressBar(
                  Math.round(
                    (globalData.total_volume[currency] /
                      globalData.total_market_cap[currency]) *
                      100
                  ),
                  "blue",
                  "red",
                  55,
                  "14"
                )}
              </div>
            </MarketData4>
            <MarketData5>
              <img src={Bitcoin} alt="bitcoin" />
              <div>{Math.round(globalData.market_cap_percentage["btc"])}%</div>
              <div>
                {progressBar(
                  Math.round(globalData.market_cap_percentage["btc"]),
                  "blue",
                  "red",
                  55,
                  "14"
                )}
              </div>
            </MarketData5>
            <MarketData6>
              <img src={Ethereum} alt="ethereum" />
              <div>{Math.round(globalData.market_cap_percentage["eth"])}%</div>
              <div>
                {progressBar(
                  Math.round(globalData.market_cap_percentage["eth"]),
                  "blue",
                  "red",
                  55,
                  "14"
                )}
              </div>
            </MarketData6>
          </MarketDataContainer>
        </NavbarGlobalContainer>
      </StyledNavbarGlobal>
    )
  );
}

export default NavbarGlobal;
