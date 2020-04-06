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
      {hours.map((obj, hourIndex) => (
        <InfoBlock
          onClick={() => setSelected({ day, hour: hourIndex })}
          enabled={selected.day === day && selected.hour === hourIndex}
          bgIndex={obj.dayHourCount}
          key={`ib-${hourIndex.toString()}}`}
        >
          {obj.dayHourCount}
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
    PropTypes.object,
  ).isRequired,
};

export default React.memo(InfoRow);
