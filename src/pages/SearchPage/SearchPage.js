import heatmapDummyData from '../../dummyData/heatmapDummyData';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from './SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import Heatmap from './Heatmap/Heatmap';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

async function handleSearch(subreddit) {
  const oneYearAgo = Math.round((new Date()).getTime() / 1000) - ONE_YEAR_IN_SECONDS;
  const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&sort=desc&sort_type=score&after=${oneYearAgo}&size=500`;

  const response = await fetch(url);
  return response.json();
}

function SearchPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [heatmapInfo, setHeatMapInfo] = useState([]);
  const { subreddit } = useParams();

  function parseRedditData() {
    const arrInfo = Array(7).fill(0).map(() => Array(24).fill(0));
    const results = searchResults.data;
    for (let i = 0; i < results.length; i += 1) {
      // Add utc seconds from API to base epoch time
      const date = new Date(0);
      date.setSeconds(results[i].created_utc);
      const day = date.getDay();
      const hour = date.getHours();
      arrInfo[day][hour] += 1;
    }
    setHeatMapInfo(arrInfo);
  }

  // Search for new subreddit when parameters have changed
  useEffect(() => {
    setDataLoaded(false);
    setIsLoading(true);
    handleSearch(subreddit)
      .then((data) => {
        setSearchResults(data);
        setDataLoaded(true);
      })
      // TO-DO: Add notification to user that there was an error
      .catch((error) => {
        console.error(error);
        setDataLoaded(false);
      })
      .finally(() => setIsLoading(false));
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
      {dataLoaded && <Heatmap info={heatmapInfo} />}
    </SearchPageWrapper>
  );
}

export default SearchPage;
