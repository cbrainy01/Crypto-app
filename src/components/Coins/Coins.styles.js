import styled from "styled-components";
import SVG from "react-inlinesvg";

export const TornadoIcon = styled(SVG)`
  cursor: pointer;
  height: 15px;
  width: 15px;
  & path {
    fill: ${(props) => props.theme.color};
  }
`;

export const CoinsContainer = styled.div`
  margin: 0 auto;
  max-width: 856px;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const SortingContainer = styled.div`
  display: flex;
`;

export const ScrollContainer = styled.div`
  max-width: 856px;
  div:last-child {
    border-bottom: none;
  }
`;

export const SortControl = styled.div`
  display: flex;
  align-items: left;
  img {
    width: 10px;
    height: 10px;
  }
`;
export const RankingSort = styled.div``;

export const SortBy = styled.div``;

export const DisplayCountControl = styled.div`
  display: flex;
  img {
    width: 10px;
    height: 10px;
  }
`;

export const CoinsBox = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  width: 100%;
`;

export const IndexHeader = styled.span`
  width: 30px;
  text-align: center;
`;

export const IdHeader = styled.div`
  width: 154px;
  display: flex;
  flex-flow: row;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
  }
`;

export const PriceHeader = styled.div`
  width: 66px;
  display: flex;
  flex-flow: row;
  align-items: center;

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

export const HourHeader = styled.div`
  width: 62px;
  display: flex;
  flex-flow: row;
  align-items: center;

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

export const DayHeader = styled.div`
  width: 70px;
  display: flex;
  flex-flow: row;
  align-items: center;

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

export const WeekHeader = styled.div`
  width: 63px;
  display: flex;
  flex-flow: row;
  align-items: center;

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: white;
  }
`;

export const VolumeHeader = styled.div`
  width: 156px;
  margin-right: 21px;
`;

export const CirculatingHeader = styled.div`
  width: 156px;
  margin-right: 16px;
`;

export const SparklineHeader = styled.div`
  width: 75px;
  text-align: left;
  padding-right: 10px;
`;

export const TableHead = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  color: ${(props) => props.theme.color};
  border-bottom: 1px solid #707070;
  height: 75px;
  font-size: 11px;
  font-weight: 800;
  width: 856px;
`;
