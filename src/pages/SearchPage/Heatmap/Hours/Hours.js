import React from 'react';
import PropTypes from 'prop-types';
import {
  HoursContainer,
  Hour,
} from './Hours.style';

function Hours({ hoursList }) {
  return (
    <HoursContainer>
      {hoursList.map((hour) => <Hour key={hour}>{hour}</Hour>)}
    </HoursContainer>
  );
}

Hours.propTypes = {
  hoursList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default React.memo(Hours);
