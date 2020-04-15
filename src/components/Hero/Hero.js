import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../assets/images/table.png';
import {
  HeroWrapper,
  Title,
  Subtitle,
  CTA,
  Caption,
  Img,
} from './Hero.style';
import { DEFAULT_SUBREDDIT } from '../../config';

function Hero() {
  return (
    <HeroWrapper>
      <Title>No reactions to your reddit posts?</Title>
      <Subtitle>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </Subtitle>
      <CTA as={Link} to={`/search/${DEFAULT_SUBREDDIT}`}>
        Show me the best time
      </CTA>
      <Caption>
        r/
        {DEFAULT_SUBREDDIT}
      </Caption>
      <Link to={`/search/${DEFAULT_SUBREDDIT}`} data-testid="hero-img">
        <Img src={Table} alt={DEFAULT_SUBREDDIT} />
      </Link>
    </HeroWrapper>
  );
}

export default Hero;
