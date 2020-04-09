import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
  const arrInfo = Array(7).fill().map(() => Array(24).fill().map(() => []));
  results.forEach((result) => {
    const createdAtInMs = result.created_utc * 1000;
    const date = new Date(createdAtInMs);
    const day = date.getDay();
    const hour = date.getHours();
    arrInfo[day][hour].push({
      author: result.author,
      title: result.title,
      created_utc: result.created_utc,
      score: result.score,
      num_comments: result.num_comments,
      full_link: result.full_link,
    });
  });
  return arrInfo;
}

function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [heatmapInfo, setHeatmapInfo] = useState([]);
  const { subreddit: currentPath } = useParams();
  const history = useHistory();

  // Load data
  //    Will load data if there:
  //      1. isn't a current load in place,
  //      2. is a change to history detected,
  //      3. the useParams() property changes
  useEffect(() => {
    function loadData() {
      const searchPath = history.location.pathname.match(/^\/\w*\/(\w*)$/i)[1] || 'javascript';
      setIsLoading(true);
      setError('');

      handleSearch(searchPath)
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
    }

    if (!isLoading) {
      loadData();
    }

    const unlisten = history.listen(() => {
      loadData();
    });
    return unlisten;
  }, [currentPath]);

  // Parse reddit data and display it in a heatmap
  useEffect(() => {
    if (searchResults.length !== 0) {
      setHeatmapInfo(parseRedditData(searchResults));
    }
  }, [searchResults]);

  return (
    <SearchPageWrapper>
      <SearchBar isLoading={isLoading} />
      {isLoading && <Spinner />}
      {error && <Error message={error} />}
      {(!isLoading && !error) && <Heatmap info={heatmapInfo} />}
    </SearchPageWrapper>
  );
}

export default SearchPage;
