import styled from 'styled-components';

const InfoRowWrapper = styled.div`
  display: flex;
`;

function getColorIndex(index) {
  if (index > 10) {
    return 10;
  }
  return index;
}

const InfoBlock = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.theme.heatmap.boxSize}px;
  width: ${(props) => props.theme.heatmap.boxSize}px;
  color: ${(props) => props.theme.colors.gray.light};
  background: ${(props) => props.theme.heatmapColors[getColorIndex(props.bgIndex)]};
  border: ${(props) => (props.enabled ? props.theme.heatmap.cell.border : 'none')};
  font-size: ${(props) => props.theme.font.size.xs};
  font-weight: 600;
  line-height: 0.64;
  &:hover {
    border: ${(props) => props.theme.heatmap.cell.border};
  }
  &:focus {
    border: ${(props) => props.theme.heatmap.cell.border};
    outline: none;
  }
`;

export {
  InfoRowWrapper,
  InfoBlock,
};
