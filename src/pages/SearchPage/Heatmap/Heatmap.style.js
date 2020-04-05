import styled from 'styled-components';

const HeatmapWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 50px;
`;

const HeatmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 332px;
  width: 1114px;
  margin-top: 8px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HoursContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: auto;
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px -1px 2px -2px rgba(0,0,0,0.1);
  &:first-child {
    border-left: 1px solid #f3f3f3;
  }
  &:last-child {
    border-right: 1px solid #f3f3f3;
  }
`;

const Hour = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 80px;
  background: linear-gradient(180deg, #fdfdfd 0%, #efefef 100%);
  border-top: 1px solid #f3f3f3;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: rows;
  height: 280px;
  width: 100%;
`;

const DaysContainer = styled.div`
  width: calc(100% - 960px);
  background: pink;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.8px;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: ${(props) => props.theme.colors.gray.light};
  background: ${(props) => props.theme.heatmapStyle.day.background};
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 960px;
`;

const InfoBlock = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  color: ${(props) => props.theme.colors.gray.light};
  background: #3984a3;
  background: ${(props) => props.background};
  border: ${(props) => (props.enabled ? '1px solid black' : 'none')};
  font-size: 14px;
  font-weight: 600;
  opacity: ${(props) => (props.enabled ? 0.9 : 1)};
  transition: opacity 250ms ease;
  &:hover {
    opacity: 0.9;
  }
`;

const TimeMessage = styled.p`
  font-size: 0.875rem;
  margin-top: 16px;
`;

const TimeZone = styled.span`
  font-weight: 700;
`;

export {
  HeatmapWrapper,
  HeatmapContainer,
  TopRow,
  HoursContainer,
  Hour,
  BottomRow,
  DaysContainer,
  Day,
  InfoContainer,
  InfoBlock,
  TimeMessage,
  TimeZone,
};
