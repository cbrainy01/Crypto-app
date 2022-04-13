import styled from "styled-components";
import SVG from "react-inlinesvg";

export const OverviewIcon = styled(SVG)`
  cursor: pointer;
  height: 15px;
  width: 15px;
  & path {
    fill: ${(props) => (props.selected === "overview" ? "#00FF5F" : "")};
  }
`;

export const PortfolioIcon = styled(SVG)`
  cursor: pointer;

  height: 15px;
  width: 15px;
  & path {
    fill: ${(props) => (props.selected === "portfolio" ? "#00FF5F" : "")};
  }
`;

export const SearchIcon = styled(SVG)`
  cursor: pointer;
  height: 15px;
  width: 15px;
  & path {
    fill: ${(props) => (props.selected ? "#00FF5F" : "")};
  }
`;

export const StyledMobileNavBottom = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 37px;
  background: ${(props) => props.theme.inner};
  @media (min-width: 603px) {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  height: 25px;
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
`;

export const NavIcon = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-size: 9px;
    font-weight: 650;
  }
`;
