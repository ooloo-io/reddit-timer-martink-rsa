import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from './SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import Heatmap from './Heatmap/Heatmap';
import heatmapDummyData from '../../dummy/heatmapDummyData';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

async function handleSearch(subreddit) {
  const oneYearAgo = Math.round((new Date()).getTime() / 1000) - ONE_YEAR_IN_SECONDS;
  const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&sort=desc&sort_type=score&after=${oneYearAgo}&size=500`;

  const response = await fetch(url);
  return response.json();
}

function SearchPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const { subreddit } = useParams();

  // Fill up 2d (7x24) array with 0s

  function parseRedditData() {
    console.log('parseRedditData');
    console.log(searchResults.data);
    const results = searchResults.data;
    for (let i = 0; i < results.length; i += 1) {
      console.log(results[i].created_utc);
      const date = new Date(0);
      date.setSeconds(results[i].created_utc);
      const day = date.getDay();
      const hour = date.getHours();
      console.log(`Day: ${day} - Hour: ${hour}`);
    }
  };

  // Search for new subreddit when parameters have changed
  useEffect(() => {
    // Simple debug toggling while developing to prevent excessive API calls.
    //      Delete when done.
    const debug = 0;
    if (debug !== 1) {
      setIsLoading(true);
      handleSearch(subreddit)
        .then((data) => setSearchResults(data))
        // TO-DO: Add notification to user that there was an error
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false); // PART OF DEBUG
    }
  }, [subreddit]);

  useEffect(() => {
    if (searchResults.length !== 0) {
      parseRedditData();
    }
  }, [searchResults]);

  return (
    <SearchPageWrapper>
      <SearchBar isLoading={isLoading} />
      {isLoading && <Spinner />}
      <Heatmap info={heatmapDummyData} />
    </SearchPageWrapper>
  );
}

export default SearchPage;
