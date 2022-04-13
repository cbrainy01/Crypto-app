import styled from "styled-components";

export const StyledMobileNavtop = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  @media (min-width: 603px) {
    display: none;
  }
`;

export const PageName = styled.div`
  font-size: 26px;
  font-weight: 900;
`;

export const NavLeft = styled.div``;
export const NavRight = styled.div`
  display: flex;
  gap: 12px;
`;
