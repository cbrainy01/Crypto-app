import styled from "styled-components";

export const StyledNewCoin = styled.div``;

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
  height: 252px;
  z-index: 4000;
  background: ${(props) => props.theme.inner};
  width: 544px;
  margin: auto;
  border-radius: 10px;
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
  width: 376px;
  height: 116px;
  display: flex;
  gap: 20px;
  margin: 0 auto 25px auto;
  background: pink;
`;

export const CoinId = styled.div`
  background: yellow;
  height: 100%;
  width: 102px;
  border-radius: 6px;
`;
export const InputsContainer = styled.div`
  background: green;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.div`
  width: 100%;
  border-radius: 6px;
  height: 33px;
  background: grey;
  margin-bottom: 9px;
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
    background: blue;
    border-radius: 6px;
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
    background: blue;
    border-radius: 6px;
    align-items: center;
  }
`;

export const ButtonsContainer = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  gap: 6px;
  margin: 0 auto;
`;
export const ButtonA = styled.div`
  background: ${(props) => props.theme.color};
  height: 100%;
  width: 100%;
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
`;
export const ButtonB = styled.div`
  background: #06d554;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  cursor: pointer;
  &:hover {
    background: #191b1f;
  }
`;
