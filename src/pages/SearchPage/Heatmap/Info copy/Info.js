import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InfoContainer,
  InfoBlock,
} from './Info.style';

function Info({ info }) {
  const [selected, setSelected] = useState({});

  return (
    <InfoContainer>
      {info.map((hours, day) => hours.map((obj, hour) => (
        <InfoBlock
          onClick={() => setSelected({ day, hour })}
          enabled={selected.day === day && selected.hour === hour}
          bgIndex={obj.dayHourCount}
          key={`ib-${hour.toString()}}`}
        >
          {obj.dayHourCount}
        </InfoBlock>
      )))}
    </InfoContainer>
  );
}

Info.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.object,
    ),
  ).isRequired,
};

export default Info;
