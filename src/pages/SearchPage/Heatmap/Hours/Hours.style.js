import styled from 'styled-components';

const HoursContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: auto;
  min-width: 960px;
  color: #757575;
  margin-left: 154px;
  font-size: ${(props) => props.theme.font.size.xs};
  font-weight: 500;
  border-bottom: ${(props) => props.theme.heatmap.hour.border};
  &:first-child {
    border-left: ${(props) => props.theme.heatmap.hour.border};
  }
  &:last-child {
    border-right: ${(props) => props.theme.heatmap.hour.border};
  }
`;

const Hour = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  width: ${(props) => props.theme.heatmap.boxSize * 2}px;
  background: ${(props) => props.theme.heatmap.hour.background};
  border-top: ${(props) => props.theme.heatmap.hour.border};
`;

export {
  HoursContainer,
  Hour,
};
