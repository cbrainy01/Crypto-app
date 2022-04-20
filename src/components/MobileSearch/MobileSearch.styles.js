import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const MobileSearchBackground = styled.div`
  width: 602px;
  height: 100%;
  z-index: 3999;
  position: fixed;
  top: 0px;
  left: 0px;
  background: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const MobileInputContainer = styled.div`
  width: 90%;
  height: 28px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: start;
  margin-bottom: 1px;
`;

export const MobileInputField = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.inner};
  border-radius: 6px;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 0 auto 10px auto;
  font-size: 28px;
  width: 90%;
`;

export const MobileSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  margin: 0 auto;
  gap: 1px;
`;

export const MobileSearchResult = styled(Link)`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 4px;
  text-decoration: none;
  background: ${(props) => props.theme.inner};
  border-top: 1px solid ${(props) => props.theme.main};
  border-radius: 4px;
  align-items: start;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  &:hover {
    opacity: 0.5;
    background: ${(props) => props.theme.main};
  }
`;

export const CrossIcon = styled(SVG)`
  cursor: pointer;
  height: 18px;
  width: 18px;
  align-self: center;
  & path {
    fill: ${(props) => props.theme.color};
  }
  margin-right: 14px;
`;
