import React from 'react';
import HomepageWrapper from './HomePage.style';
import Button from '../../components/Button/Button';
import Table from '../../assets/images/table.png';

function HomePage() {
  return (
    <HomepageWrapper>
      <h1>No reactions to your reddit posts?</h1>
      <p>Great timing, great results! Find the best time to post on your subreddit.</p>
      <form>
        <input type="text" name="search" aria-label="Search" />
        <button type="submit">Search</button>
        <input type="submit" value="Submit" />
      </form>
      <Button>Show me the best time</Button>
      <img src={Table} alt="Javascript" />
    </HomepageWrapper>
  );
}

export default HomePage;
