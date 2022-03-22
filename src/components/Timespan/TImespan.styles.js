import styled from "styled-components";

export const StyledTimespan = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  overflow: hidden;
  margin: 0 auto 60px auto;
`;
export const TimespanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 7px 0 7px 0;

  background: ${(props) => props.theme.main};
  border-radius: 10px;
  color: white;
  div {
    background: ${(props) => props.theme.inner};
    padding: 4px 8px;
    border-radius: 6px;
    margin-right: 8px;
    margin-left: 8px;
  }
  div:active {
    background: red;
  }
  div:hover {
    background: #2172e5;
    cursor: pointer;
  }
  div:focus {
    color: red;
  }
`;

export const TimespanWrap = styled.div`
  display: flex;
`;
