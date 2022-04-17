import styled from "styled-components";

export const ShopSearchResults = styled.div`
  background: ${(props) => props.theme.inner};
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 6px;
  overflow: hidden;
  z-index: 4100;
`;

export const ShopLoading = styled.div`
  background: ${(props) => props.theme.inner};
  position: absolute;
`;