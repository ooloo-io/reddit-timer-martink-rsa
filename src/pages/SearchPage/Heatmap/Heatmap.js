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
import PostsTable from './PostsTable/PostsTable';

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
  function showPostsTable() {
    try {
      if (info[selected.day][selected.hour].length !== 0) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  return (
    <HeatmapWrapper>
      <HeatmapContainer>
        <TopRow>
          <Hours hoursList={hoursList} />
        </TopRow>
        <BottomRow>
          <Days daysList={daysList} />
          <InfoDisplay selected={selected} setSelected={setSelected} info={info} />
        </BottomRow>
      </HeatmapContainer>
      <TimeMessage />
      {showPostsTable() && <PostsTable info={info[selected.day][selected.hour]} />}
    </HeatmapWrapper>
  );
}

Heatmap.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.array,
  ).isRequired,
};

export default Heatmap;
