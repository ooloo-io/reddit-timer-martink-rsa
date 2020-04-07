import styled from 'styled-components';

const HoursContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 960px;
  color: #757575;
  font-size: ${(props) => props.theme.font.size.xs};
  font-weight: 500;
  border-bottom: 1px solid #f3f3f3;
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
  height: 51px;
  width: ${(props) => props.theme.heatmap.boxSize * 2}px;
  background: linear-gradient(0deg, #e9e9e9 0%, #fefefe 97%);
  border-top: 1px solid #f3f3f3;
`;

export {
  HoursContainer,
  Hour,
};
