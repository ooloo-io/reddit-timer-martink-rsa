import styled from 'styled-components';

const HeatmapWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 52px;
`;

const HeatmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 332px;
  width: 1114px;
  margin-top: 8px;
  overflow-y: scroll;
  @media (max-width: 1134px) {
    max-width: calc(100% - 20px);
    text-align: left;
  }
`;

const TopRow = styled.div`
  width: 100%;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export {
  HeatmapWrapper,
  HeatmapContainer,
  TopRow,
  BottomRow,
};
