import React from 'react';
import PropTypes from 'prop-types';
import {
  DaysContainer,
  Day,
} from './Days.style';


function Days({ daysList }) {
  return (
    <DaysContainer>
      {daysList.map((day) => <Day key={day}>{day}</Day>)}
    </DaysContainer>
  );
}

Days.propTypes = {
  daysList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default React.memo(Days);
