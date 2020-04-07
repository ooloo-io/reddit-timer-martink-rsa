import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InfoContainer,
} from './InfoDisplay.style';
import InfoRow from '../InfoRow/InfoRow';

function InfoDisplay({ info }) {
  const [selected, setSelected] = useState({});

  return (
    <InfoContainer>
      {info.map((item, index) => (
        <InfoRow
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
  info: PropTypes.arrayOf(
    PropTypes.array,
  ).isRequired,
};

export default InfoDisplay;
