import styled from 'styled-components';

const InfoRowWrapper = styled.div`
  display: flex;
  width: 960px;
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
  border: ${(props) => (props.enabled ? 'solid 1px #1e2537' : 'none')};
  font-size: ${(props) => props.theme.font.size.xs};
  font-weight: 600;
  line-height: 0.64;
  &:hover {
    border: solid 1px #1e2537;
  }
  &:focus {
    border: solid 1px #1e2537;
    outline: none;
  }
`;

export {
  InfoRowWrapper,
  InfoBlock,
};
