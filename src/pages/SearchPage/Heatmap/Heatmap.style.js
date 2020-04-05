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
`;

const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HoursContainer = styled.div`
  display: flex;
  height: 100%;
  width: auto;
`;

const Hour = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 80px;
  border: 1px solid #ddd;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(214,214,214,1) 100%);

`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: rows;
  height: 280px;
  width: 100%;
  background: lightgray;
`;

const DaysContainer = styled.div`
  width: calc(100% - 960px);
  background: pink;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray.light};
  background: ${(props) => props.theme.heatmapStyle.day.background};
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 960px;
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  color: ${(props) => props.theme.colors.gray.light};
  background: green;
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
};
