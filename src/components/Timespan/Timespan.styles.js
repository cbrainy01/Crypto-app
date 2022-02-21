import styled from "styled-components";
export const StyledTimespan = styled.div`
    display: flex;
    margin: 25px 192px 0px 192px;
    padding: 15px 6px;
    justify-content: space-evenly;
    div {
        background: blue;
        padding: 4px 14px;
        border-radius: 10px
    }
    div:active {
        background: red;
    }
    div:hover {
        background: green;
        cursor: pointer;
    }
`