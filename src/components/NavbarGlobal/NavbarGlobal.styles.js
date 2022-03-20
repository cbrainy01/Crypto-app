import styled from "styled-components";

export const StyledNavbarGlobal = styled.div`
    background: ${(props) => props.theme.main };
    color: ${(props) => props.theme.color };
    width: 47%;
    height: 55px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0px 0px 20px 20px;
    margin: 0 auto;    
`
export const NavbarGlobalContainer = styled.div`
`

export const MarketDataContainer = styled.div`
    width: 100%;    
    display: flex;
    align-items: center;
    div, p {
        font-size: .85em;
    }
` 
export const MarketData1 = styled.div`
   margin-right: 42px;
    display: flex;    
`
export const MarketData2 = styled.div`
   margin-right: 20px;
    display: flex;
`
export const MarketData3 = styled.div`
   margin-right: 20px;
    display: flex;
`
export const MarketData4 = styled.div`
   margin-right: 20px;
    display: flex;
`
export const MarketData5 = styled.div`
   margin-right: 20px;
    display: flex;
`
export const MarketData6 = styled.div`
    display: flex;
`