import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from './SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import Heatmap from './Heatmap/Heatmap';
import Error from './Error/Error';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

async function handleSearch(subreddit) {
  const oneYearAgo = Math.round((new Date()).getTime() / 1000) - ONE_YEAR_IN_SECONDS;
  const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&sort=desc&sort_type=score&after=${oneYearAgo}&size=500`;
  const response = await fetch(url);
  return response.json();
}

function parseRedditData(input) {
  const results = [...input.data];
  const arrInfo = Array(7).fill().map(() => Array(24).fill().map(() => ({
    dayHourCount: 0,
    posts: [],
  })));
  for (let i = 0; i < results.length; i += 1) {
    const createdAtInMs = results[i].created_utc * 1000;
    const date = new Date(createdAtInMs);
    const day = date.getDay();
    const hour = date.getHours();
    arrInfo[day][hour].dayHourCount += 1;
    arrInfo[day][hour].posts.push({
      author: results[i].author,
      title: results[i].title,
      created_utc: results[i].created_utc,
      score: results[i].score,
      num_comments: results[i].num_comments,
    });
  }
  return arrInfo;
}

function SearchPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [heatmapInfo, setHeatmapInfo] = useState([]);
  const { subreddit } = useParams();

  // Search for new subreddit when parameters have changed
  useEffect(() => {
    setIsLoading(true);
    setError('');
    handleSearch(subreddit)
      .then((data) => {
        if (data.data.length !== 0) {
          setSearchResults(data);
        } else {
          setError('0 results returned.');
        }
      })
      .catch(() => {
        setError('Error loading data.');
      })
      .finally(() => setIsLoading(false));
  }, [subreddit]);

  useEffect(() => {
    if (searchResults.length !== 0) {
      setHeatmapInfo(parseRedditData(searchResults));
    }
  }, [searchResults]);

  return (
    <SearchPageWrapper>
      <SearchBar isLoading={isLoading} />
      {error && <Error message={error} />}
      {isLoading && <Spinner />}
      {(!isLoading && !error) && <Heatmap info={heatmapInfo} />}
    </SearchPageWrapper>
  );
}

export default SearchPage;
