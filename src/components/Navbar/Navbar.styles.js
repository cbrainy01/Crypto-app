import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledNavbar = styled.div`
    background: ${props => props.theme.main};
`
export const StyledLink = styled(Link)`
    margin-left: 5px;
    color: red;
`
