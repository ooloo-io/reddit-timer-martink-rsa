import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InfoContainer,
} from './Info.style';
import InfoRow from '../InfoRow/InfoRow';

function Info({ selected, setSelected, info }) {
  return (
    <InfoContainer>
      <InfoRow selected={selected} setSelected={setSelected} day={0} hours={info[0]} />
      <InfoRow selected={selected} setSelected={setSelected} day={1} hours={info[1]} />
      <InfoRow selected={selected} setSelected={setSelected} day={2} hours={info[2]} />
      <InfoRow selected={selected} setSelected={setSelected} day={3} hours={info[3]} />
      <InfoRow selected={selected} setSelected={setSelected} day={4} hours={info[4]} />
      <InfoRow selected={selected} setSelected={setSelected} day={5} hours={info[5]} />
      <InfoRow selected={selected} setSelected={setSelected} day={6} hours={info[6]} />
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
