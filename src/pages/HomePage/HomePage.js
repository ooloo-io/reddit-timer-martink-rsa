import React from 'react';
import HomepageWrapper from './HomePage.style';
import Button from '../../components/Button/Button';

function HomePage() {
  return (
    <HomepageWrapper>
      <h1>No reactions to your reddit posts?</h1>
      <p>Great timing, great results! Find the best time to post on your subreddit.</p>
      <Button>Show me the best time</Button>
      <h4>h4 Heading</h4>
      <h5>h5 Heading</h5>
      <h6>h6 Heading</h6>
    </HomepageWrapper>
  );
}

export default HomePage;
