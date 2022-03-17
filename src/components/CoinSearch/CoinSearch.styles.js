import styled from "styled-components";
import { Link } from "react-router-dom";

export const InputField = styled.input`` 

export const SearchResults = styled.div`
    background: #2c2f36;
    position: absolute;
    border-radius: 6px;
    overflow: hidden;
`

export const Result = styled.div`
    cursor: pointer;
    &:hover {
        opacity: 0.5;
        background: ${(props) => props.theme.main};
    }
`

export const ResultLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.color};
`