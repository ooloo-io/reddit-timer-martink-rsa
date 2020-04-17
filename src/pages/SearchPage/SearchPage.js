import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from './SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import Heatmap from './Heatmap/Heatmap';
import Error from './Error/Error';
import { DEFAULT_SUBREDDIT } from '../../config';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export async function handleSearch(subreddit) {
  const oneYearAgo = Math.round(new Date().getTime() / 1000) - ONE_YEAR_IN_SECONDS;
  const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&sort=desc&sort_type=score&after=${oneYearAgo}&size=500`;
  try {
    const result = await axios(url);
    return result.data.data;
  } catch (error) {
    return 'Error';
  }
}

export function parseRedditData(input) {
  const results = [...input];
  const arrInfo = Array(7).fill().map(() => Array(24).fill().map(() => []));
  results.forEach((result) => {
    const createdAtInMs = result.created_utc * 1000;
    const date = new Date(createdAtInMs);
    const day = date.getDay();
    const hour = date.getHours();
    arrInfo[day][hour].push({
      author: result.author,
      title: result.title,
      created: date,
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
  const [heatmapInfo, setHeatmapInfo] = useState([]);
  const history = useHistory();

  // Load data
  //    Will load data if there:
  //      1. isn't a current load in place,
  //      2. is a change to history detected,
  useEffect(() => {
    function loadData() {
      const searchPath = history.location.pathname.split('/')[2] || DEFAULT_SUBREDDIT;
      console.log('---loadData() running: (Going to pull data and then parse it)');
      console.log('setIsLoading (initial, should be false):', isLoading);
      setIsLoading(true);
      console.log('setIsLoading (changed, should be true):', isLoading);
      setError('');

      handleSearch(searchPath)
        .then((data) => {
          if (data.length !== 0) {
            const searchResults = parseRedditData(data);
            console.log('parseRedditData(data) call, setHeatmapInfo has set data');
            setHeatmapInfo(searchResults);
            console.log('setHeatmapInfo(parseData) set to results above');
          } else {
            console.log('DATA LENGTH 0');
            setError('0 results returned.');
          }
        })
        .catch(() => {
          console.log('!! ERROR LOADING DATA');
          setError('Error loading data.');
        })
        .finally(() => {
          console.log('"Finally" has run, loading set to false');
          setIsLoading(false);
        });
    }

    const unlisten = history.listen(() => {
      loadData();
    });

    loadData();

    return unlisten;
    // eslint-disable-next-line
  }, []);

  return (
    <SearchPageWrapper>
      <SearchBar isLoading={isLoading} />
      {isLoading && <Spinner />}
      {error && <Error message={error} />}
      {!isLoading && !error && <Heatmap info={heatmapInfo} />}
    </SearchPageWrapper>
  );
}

export default SearchPage;
