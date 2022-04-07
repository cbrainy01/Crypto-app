import styled from "styled-components";

export const ExchangeContainer = styled.div`
  margin-bottom: 24px;
`;

export const ExchangeWrap = styled.div`
  display: flex;
  width: 375px;
  height: 27px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 12px;
  color: ${(props) => props.theme.main};
  img {
    margin: auto 16px auto 8px;
    width: 12px;
    height: 9px;
  }
  @media (max-width: 588px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px;
    img {
      align-self: center;
    }
  }
`;

export const ExchangeBar = styled.div`
  border-radius: 8px;
  width: 166px;
  background: ${(props) => props.theme.inner};
  display: flex;
  @media (max-width: 588px) {
    width: 100%;
  }
`;

export const InputBar = styled.input`
  background: ${(props) => props.theme.inner};
  color: ${(props) => props.theme.color};
  height: 27px;
  width: 100%;
  border-radius: 0px 8px 8px 0px;
  outline: none;
  border: 1px solid #191b1f;
  border-left: none;
  font-size: 8px;
  padding-left: 5px;
`;

export const CurrencyFill = styled.div`
  font-size: 8px;
  width: 25%;
  height: 27px;
  background: #06d554;
  color: white;
  border-radius: 8px 0px 0px 8px;
  display: flex;
  justify-content: center;
  p {
    display: flex;
    margin: auto 0;
    font-weight: 600;
  }
`;

export const SymbolFill = styled.div`
  height: 27px;
  background: ${(props) => props.theme.inner};
  color: ${(props) => props.theme.color};
  border-top: 1px solid #191b1f;
  border-bottom: 1px solid #191b1f;
  display: flex;
  justify-content: center;
  p {
    display: flex;
    margin: auto 0;
    padding-left: 9px;
    font-size: 8px;
    color: ${(props) => props.theme.color};
  }
`;
