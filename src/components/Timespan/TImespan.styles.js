import styled from "styled-components";

export const StyledTimespan = styled.div`
    display: flex;
    margin: 0 auto;
    width: 50%;
    padding: 15px 6px;
    justify-content: space-evenly;
    background: grey;
    border-radius: 10px;
    color: white;
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
    div:focus {
        color: red;
    }
`