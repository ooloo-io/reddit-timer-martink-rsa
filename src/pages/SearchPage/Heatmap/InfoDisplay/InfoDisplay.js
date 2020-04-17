import React from 'react';
import PropTypes from 'prop-types';
import { InfoContainer } from './InfoDisplay.style';
import InfoRow from '../InfoRow/InfoRow';

function InfoDisplay({ info, selected, setSelected }) {
  return (
    <InfoContainer data-testid="heatmap-container-items">
      {info.map((item, index) => (
        <InfoRow
          data-testid={`heatmap-row-${index}`}
          // eslint-disable-next-line react/no-array-index-key
          key={`ir-${index}`}
          selected={selected}
          setSelected={setSelected}
          day={index}
          hours={item}
        />
      ))}
    </InfoContainer>
  );
}

InfoDisplay.propTypes = {
  selected: PropTypes.shape({
    day: PropTypes.number,
    hour: PropTypes.number,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
  info: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default InfoDisplay;
