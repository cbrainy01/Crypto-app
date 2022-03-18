import styled from "styled-components";

export const Container = styled.div`
    background: ${(props) => props.theme.inner};
    border: 10px solid ${(props) => props.theme.main};
    margin: 0 auto;
    // padding: 0 55px 34px 55px;
    // box-sizing: border-box;
`