import styled from "styled-components";

export const StyledTimespan = styled.div`
  display: flex;
  justify-content: center;
  max-width: 350px;

  height: 50px;
  overflow: hidden;
  margin: 0 auto 60px auto;
  @media (max-width: 620px) {
    margin-top: 30px;
  }
`;
export const TimespanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 7px 0 7px 0;
  justify-content: space-evenly;

  background: ${(props) => props.theme.main};
  border-radius: 10px;
  color: white;
`;

export const TimespanButton = styled.div`
background: ${(props) => props.selected ? "#00FF5F" : props.theme.inner};
display: flex;
justify-content: center;
align-items: center;
padding: 0 8px;
height: 100%;
border-radius: 6px;
@media (max-width: 588px) {
  height: 100%;
}
&:hover {
  background: #00FF5F;
  cursor: pointer;
}
&:focus {
  background: #00FF5F;
}
&:after {
  background: red;
}
`

export const TimespanWrap = styled.div`
  display: flex;
  
  @media (max-width: 588px) {
    width: 100%;
  }
  background: blue;
`;
