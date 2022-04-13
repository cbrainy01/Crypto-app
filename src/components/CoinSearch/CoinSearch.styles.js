import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCoinSearch = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputField = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.main};
  border-radius: 6px;
`;

export const SearchResults = styled.div`
  background: #2c2f36;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 6px;
  overflow: hidden;
  z-index: 4100;
  margin-top: 5px;
`;

export const Loading = styled.div`
  margin-top: 5px;
  &:hover {
    opacity: 0.5;
    background: ${(props) => props.theme.main};
  }
 
`;

export const ResultLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    background: ${(props) => props.theme.main};
  }
`;

export const Result = styled.div`
  text-decoration: none;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    background: ${(props) => props.theme.main};
  }
`