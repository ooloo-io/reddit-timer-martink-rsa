import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';


const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

function SearchPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const path = useParams().subreddit;
  const [redditAPIObj, setRedditAPIObj] = useState({
    type: 'submission',
    params: {
      subreddit: 'javascript',
      sort: 'desc',
      sort_type: 'created_utc',
      // Current time in seconds minus one year
      after: Math.round((new Date()).getTime() / 1000) - ONE_YEAR_IN_SECONDS,
      size: 500,
    },
  });

  function buildRedditAPILink(APIObj) {
    // Build an API link based on the params given. Will look similar to:
    // https://api.pushshift.io/reddit/search/submission/?subreddit=javascript$sort=desc$sort_type=created_utc$after=1554462807$size=500
    let APILink = `https://api.pushshift.io/reddit/search/${APIObj.type}/`;
    Object.keys(APIObj.params).forEach((key, index) => {
      let urlOperator = '';
      if (index === 0) {
        urlOperator = '?';
      } else {
        urlOperator = '&';
      }
      APILink += `${urlOperator}${key}=${APIObj.params[key]}`;
    });
    return APILink;
  }

  async function handleSearch() {
    const redditAPILink = buildRedditAPILink(redditAPIObj);

    try {
      setIsLoading(true);
      const data = await fetchData(redditAPILink);
      console.log(redditAPILink);
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      // TO-DO: Add notification to user that there was an error
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  // Handles the child component used for searching
  function handleSearchInput(searchTerm) {
    history.push(`/search/${searchTerm}`);
  }

  // Listen for if the URL has changed
  useEffect(() => {
    const unlisten = history.listen(() => {
      setRedditAPIObj((prevState) => {
        return {
          ...prevState,
          params: {
            ...prevState.params,
            subreddit: path,
          },
        };
      });
    });
    return unlisten;
  }, [history, path]);

  // Search for new subreddit when parameters have changed
  useEffect(() => {
    handleSearch();
  }, [redditAPIObj]);

  return (
    <SearchPageWrapper>
      <SearchBar handleSearch={handleSearchInput} isLoading={isLoading} />
      {isLoading && <Spinner />}
    </SearchPageWrapper>
  );
}

export default SearchPage;
