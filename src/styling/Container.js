import styled from "styled-components";

export const Container = styled.div`
    background: ${(props) => props.theme.inner};
    border: 10px solid ${(props) => props.theme.main};
    margin: 0 auto;
    min-width: 236px;
`