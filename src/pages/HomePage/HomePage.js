import React from 'react';
import HomepageWrapper from './HomePage.style';
import Hero from '../../components/Hero/Hero';

function HomePage() {
  return (
    <HomepageWrapper>
      <Hero
        title="No reactions to your reddit posts?"
        subtitle="Great timing, great results! Find the best time to post on your subreddit."
        cta="Show me the best time"
      />
    </HomepageWrapper>
  );
}

export default HomePage;
