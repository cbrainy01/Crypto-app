import styled from "styled-components";

export const CoinShopBackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3999;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
`;

export const CoinShopForm = styled.div`
  min-height: 252px;
  z-index: 4000;
  background: ${(props) => props.theme.inner};
  width: 544px;
  margin: 0 auto;
  border-radius: 10px;
  min-width: 236px;
  display: flex;
  flex-direction: column;
`;

export const SelectCoinsContainer = styled.div`
  width: 100%;
  height: 19px;
  margin: 13px 19px 18px 0;
  display: flex;
`;

export const SelectCoins = styled.div`
  display: flex;
  justify-content: center;
  width: 93%;
  font-size: 14px;
  align-items: top;
  color: ${(props) => props.theme.color};
`;

export const CloseButton = styled.div`
  width: 7%;
  img {
    height: 19px;
    width: 19px;
    cursor: pointer;
  }
`;

export const PurchaseDetailsContainer = styled.div`
  max-width: 376px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0 auto 25px auto;
  @media (max-width: 588px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CoinId = styled.div`
  background: yellow;
  height: 116px;
  width: 102px;
  border-radius: 6px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background: ${(props) => props.theme.main};
`;

export const CoinImageWrap = styled.div`
  background: ${(props) => props.theme.inner};
  height: 41px;
  width: 41px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinName = styled.div`
  overflow-wrap: anywhere;
  align-self: center;
`;

export const InputsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 121px;
`;

export const SearchInput = styled.div`
  width: 100%;
  border-radius: 6px;
  height: 33px;
  background: grey;
  margin-bottom: 9px;
  @media (max-width: 588px) {
    width: 121px;
    margin: 0 auto 9px auto;
  }
`;

export const AmtInput = styled.div`
  width: 100%;
  border-radius: 6px;
  height: 33px;
  background: grey;
  margin-bottom: 9px;
  input {
    all: unset;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.main};
    border-radius: 6px;
  }
  @media (max-width: 588px) {
    width: 121px;
    margin: 0 auto 9px auto;
  }
`;

export const DateInput = styled.div`
  width: 100%;
  border-radius: 6px;
  height: 33px;
  background: grey;
  input {
    all: unset;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.main};
    border-radius: 6px;
    align-items: center;
  }
  @media (max-width: 588px) {
    width: 121px;
    margin: 0 auto;
  }
`;

export const ButtonsContainer = styled.div`
  max-width: 300px;
  display: flex;
  gap: 6px;
  margin: 0 auto;

  @media (max-width: 588px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonA = styled.div`
  background: ${(props) => props.theme.color};
  height: 25px;
  width: 254px;
  border-radius: 6px;
  color: #06d554;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  cursor: pointer;
  &:hover {
    background: #191b1f;
  }
  @media (max-width: 588px) {
    width: 121px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonB = styled.div`
  background: #06d554;
  height: 25px;
  width: 254px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  cursor: ${(props) => (props.allowSave ? "pointer" : "not-allowed")};
  filter: ${(props) =>
    props.allowSave ? "brightness(100%)" : "brightness(25%)"};
  &:hover {
    background: ${(props) => (props.allowSave ? "#191b1f" : "#06d554")};
  }
  @media (max-width: 588px) {
    width: 121px;
    margin-left: auto;
    margin-right: auto;
  }
`;
