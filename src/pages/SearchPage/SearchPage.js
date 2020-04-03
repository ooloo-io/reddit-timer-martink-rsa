import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';

function SearchPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(searchTerm) {
    const timeNow = new Date();
    const timeLastYear = Math.round(timeNow.getTime() / 1000) - 31536000; // Seconds in year
    setIsLoading(true);
    const response = await fetch(
      `https://api.pushshift.io/reddit/search/submission/?subreddit=${searchTerm}&sort=desc&sort_type=created_utc&after=${timeLastYear}&size=500`,
      { mode: 'cors' },
    );
    if (response.status === 200) {
      setIsLoading(false);
      return response.json();
    }
    setIsLoading(false);
    return 'Error';
  }

  async function handleSearch(searchTerm) {
    history.push(`/search/${searchTerm}`);
    const data = await fetchData(searchTerm);
    console.log(data);
  }

  return (
    <SearchPageWrapper>
      <SearchBar handleSearch={handleSearch} />
      {isLoading ? <Spinner /> : null}
    </SearchPageWrapper>
  );
}

export default SearchPage;
