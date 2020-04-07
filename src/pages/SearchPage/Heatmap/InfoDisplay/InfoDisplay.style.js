import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 40px;
  width: 40px;
  color: ${(props) => props.theme.colors.gray.light};
  background: ${(props) => props.theme.heatmapColors[getColorIndex(props.bgIndex)]};
  border: ${(props) => (props.enabled ? 'solid 1px #1e2537' : 'none')};
  font-size: ${(props) => props.theme.font.size.xs};
  font-weight: 600;
  line-height: 0.64;
  &:hover {
    border: solid 1px #1e2537;
  }
`;

export {
  InfoContainer,
  InfoBlock,
};
