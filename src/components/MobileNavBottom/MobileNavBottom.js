import React, { useState } from "react";
import Search from "icons/Search.svg";
import Overview from "icons/Overview.svg";
import Portfolio from "icons/Portfolio.svg";
import { Link } from "react-router-dom";
import MobileSearch from "components/MobileSearch";
import { useDispatch, useSelector } from "react-redux";
import { activateSearch } from "store/coinSearch/actions";
import { setPageName } from "store/universalVariables/actions";
import {
  IconsContainer,
  NavIcon,
  OverviewIcon,
  SearchIcon,
  PortfolioIcon,
  StyledMobileNavBottom,
} from "./MobileNavBottom.styles";

function MobileNavBottom() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("none");

  const searchIsActive = useSelector(
    (state) => state.coinSearch.searchIsActive
  );

  return (
    <StyledMobileNavBottom>
      <IconsContainer>
        <NavIcon>
          <Link to={"/"}>
            <OverviewIcon
              selected={selected}
              onClick={() => {
                dispatch(setPageName("Overview"));
                setSelected("overview");
              }}
              src={Overview}
              alt="overview button"
            />
          </Link>
          <div>Overview</div>
        </NavIcon>
        <NavIcon>
          <Link to={"/portfolio"}>
            <PortfolioIcon
              selected={selected}
              onClick={() => {
                dispatch(setPageName("Portfolio"));
                setSelected("portfolio");
              }}
              src={Portfolio}
              alt="portfolio button"
            />
          </Link>
          <div>Portfolio</div>
        </NavIcon>
        <NavIcon>
          <SearchIcon
            selected={searchIsActive}
            onClick={() => {
              setSelected("search");
              dispatch(activateSearch());
            }}
            src={Search}
            alt="search button"
          />
          <div>Search</div>
        </NavIcon>
        {searchIsActive ? <MobileSearch /> : ""}
      </IconsContainer>
    </StyledMobileNavBottom>
  );
}

export default MobileNavBottom;
