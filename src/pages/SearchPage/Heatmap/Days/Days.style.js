import styled from 'styled-components';

const DaysContainer = styled.div`
  width: calc(100% - 960px);
  background: pink;
  font-size: ${(props) => props.theme.font.size.s};
  font-weight: 600;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.theme.heatmap.boxSize}px;
  color: ${(props) => props.theme.colors.gray.light};
  background: ${(props) => props.theme.heatmap.day.background};
  padding-bottom: 1px;
  box-sizing: border-box;
`;

export {
  DaysContainer,
  Day,
};
