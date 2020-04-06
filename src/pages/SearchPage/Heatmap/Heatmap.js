import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  HeatmapWrapper,
  HeatmapContainer,
  TopRow,
  BottomRow,
} from './Heatmap.style';
import Hours from './Hours/Hours';
import Days from './Days/Days';
import InfoDisplay from './InfoDisplay/InfoDisplay';
import TimeMessage from './FooterMessage/TimeMessage';
import PostsTable from '../PostsTable/PostsTable';

const daysList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const hoursList = [
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

function Heatmap({ info }) {
  const [selected, setSelected] = useState({});

  return (
    <HeatmapWrapper>
      <HeatmapContainer>
        <TopRow>
          <Hours hoursList={hoursList} />
        </TopRow>
        <BottomRow>
          <Days daysList={daysList} />
<<<<<<< HEAD
          <InfoDisplay info={info} />
=======
          <Info selected={selected} setSelected={setSelected} info={info} />
>>>>>>> 9b80a17... Post table
        </BottomRow>
      </HeatmapContainer>
      <TimeMessage />
      {Object.keys(selected).length > 0 && <PostsTable info={info[selected.day][selected.hour]} />}
    </HeatmapWrapper>
  );
}

Heatmap.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.array,
  ).isRequired,
};

export default Heatmap;
