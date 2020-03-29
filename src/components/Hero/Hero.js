import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../assets/images/table.png';
import {
  HeroWrapper,
  Title,
  Subtitle,
  CTA,
  Caption,
} from './Hero.style';

function Hero() {
  return (
    <HeroWrapper>
      <Title>No reactions to your reddit posts?</Title>
      <Subtitle>
        Great timing, great results!
        {' '}
        Find the best time to post on your subreddit.
      </Subtitle>
      <Link to='/search?query="javascript"' alt="Search">
        <CTA>Show me the best time</CTA>
      </Link>
      <Caption>r/javascript</Caption>
      <Link to="/search" alt="Search">
        <img src={Table} alt="Javascript" />
      </Link>
    </HeroWrapper>
  );
}

export default Hero;
