import React from 'react';
import PropTypes from 'prop-types';
import {
  HeatmapWrapper,
  HeatmapContainer,
  TopRow,
  HoursContainer,
  Hour,
  BottomRow,
  DaysContainer,
  Day,
  InfoContainer,
  InfoBlock,
} from './Heatmap.style';

const hours = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const heatmapColors = [
  '#e0e592',
  '#aed396',
  '#a9d194',
  '#a0ce93',
  '#99cd94',
  '#8cc894',
  '#5eb391',
  '#5db492',
  '#5cb391',
  '#5aad8c',
  '#3984a3',
];

function Heatmap({ info }) {
  function getCustomBlock(infoValue, indexX, indexY) {
    return <InfoBlock background={heatmapColors[infoValue]} key={`ib-${indexX}-${indexY}`}>{infoValue}</InfoBlock>;
  }

  return (
    <HeatmapWrapper>
      <HeatmapContainer>
        <TopRow>
          <HoursContainer>
            {hours.map((hour) => <Hour key={hour}>{hour}</Hour>)}
          </HoursContainer>
        </TopRow>
        <BottomRow>
          <DaysContainer>
            {days.map((day) => <Day key={day}>{day}</Day>)}
          </DaysContainer>
          <InfoContainer>
            {info.map((item, indexX) => item.map((value, indexY) => getCustomBlock(value, indexX, indexY)))}
          </InfoContainer>
        </BottomRow>
      </HeatmapContainer>
    </HeatmapWrapper>
  );
}

Heatmap.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.number,
    ),
  ).isRequired,
};

export default Heatmap;
