import styled from "styled-components";

export const StyledCoinPageChart = styled.div``;

export const RadioContainer = styled.div`
  margin-top: 27px;
  padding: 0 351px 0 348px;
`;

export const RadioWrap = styled.div`
  width: 260px;
  display: flex;
  flex-flow: row;
  justify-content: center;
`
export const RadioButton = styled.input``;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 18px;
  p {
    font-size: 8.5px;
  }
  input {
    display: none;
  }
  div {
    width: 14px;
    height: 14px;
    border: 1px solid #06D554;
    border-radius: 50%;
    margin-right: 2px;
    padding: 1px;
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
