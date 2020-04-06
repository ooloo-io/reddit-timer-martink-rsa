import styled from 'styled-components';

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

export {
  DaysContainer,
  Day,
};
