import React from 'react';
import PropTypes from 'prop-types';
import {
  InfoRowWrapper,
  InfoBlock,
} from './InfoRow.style';

function InfoRow({
  selected, setSelected, day, hours,
}) {
  return (
    <InfoRowWrapper>
      {hours.map((obj, hour) => (
        <InfoBlock
          onClick={() => setSelected({ day, hour })}
          enabled={selected.day === day && selected.hour === hour}
          bgIndex={obj.length}
          key={`ib-${hour.toString()}}`}
        >
          {obj.length}
        </InfoBlock>
      ))}
    </InfoRowWrapper>
  );
}

InfoRow.propTypes = {
  selected: PropTypes.objectOf(PropTypes.number).isRequired,
  setSelected: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  hours: PropTypes.arrayOf(
    PropTypes.array,
  ).isRequired,
};

export default React.memo(InfoRow);
