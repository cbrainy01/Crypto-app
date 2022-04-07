import styled from "styled-components";

export const StyledCoinPageChart = styled.div`
  @media (max-width: 588px) {
    background: ${(props) => props.theme.main};
    display: flex;
    flex-flow: column;
    gap: 26px;
  }
`;

export const RadioContainer = styled.div`
  margin-top: 27px;
`;

export const RadioWrap = styled.div`
  width: 230px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 588px) {
    width: 100%;
  }
`;
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
    border: 1px solid #06d554;
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

export const LineContainer = styled.div`
  width: 100%;
`;
