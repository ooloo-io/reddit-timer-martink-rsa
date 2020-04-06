import styled from 'styled-components';

const HeatmapWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 51px;
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

const BottomRow = styled.div`
  display: flex;
  flex-direction: rows;
  height: 280px;
  width: 100%;
`;

export {
  HeatmapWrapper,
  HeatmapContainer,
  TopRow,
  BottomRow,
};
