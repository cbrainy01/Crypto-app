import styled from "styled-components";

export const StyledCoinPageChart = styled.div``;

export const RadioContainer = styled.div``;

export const RadioButton = styled.input``;

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  input {
    display: none;
  }
  div {
    width: 1.25em;
    height: 1.25em;
    border: 2px solid white;
    border-radius: 50%;
    margin-right: 10px;
    padding: 2px;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: limegreen;
      border-radius: 50%;
      transform: scale(0);
    }
  }
  input:checked + div::after {
    transform: scale(1);
  }
`;
