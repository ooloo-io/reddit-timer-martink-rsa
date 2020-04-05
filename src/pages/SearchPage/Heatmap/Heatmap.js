import React from 'react';
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

function Heatmap({ info }) {
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
            {info.map((item, indexX) => item.map((value, indexY) => <InfoBlock key={`${indexX}-${indexY}`}>{value}</InfoBlock>))}
          </InfoContainer>
        </BottomRow>
      </HeatmapContainer>
    </HeatmapWrapper>
  );
}

export default Heatmap;
