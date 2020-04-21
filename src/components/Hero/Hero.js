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
import { SEARCH_PATH, DEFAULT_SUBREDDIT } from '../../config';

function Hero() {
  return (
    <HeroWrapper>
      <Title>No reactions to your reddit posts?</Title>
      <Subtitle>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </Subtitle>
      <CTA as={Link} to={`/${SEARCH_PATH}/${DEFAULT_SUBREDDIT}`} data-testid="hero-button">
        Show me the best time
      </CTA>
      <Caption>
        r/
        {DEFAULT_SUBREDDIT}
      </Caption>
      <Link to={`/${SEARCH_PATH}/${DEFAULT_SUBREDDIT}`}>
        <Img src={Table} alt={DEFAULT_SUBREDDIT} />
      </Link>
    </HeroWrapper>
  );
}

export default Hero;
