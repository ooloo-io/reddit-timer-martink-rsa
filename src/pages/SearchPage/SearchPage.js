import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from '../SearchBar/SearchBar';

function SearchPage() {
  const history = useHistory();

  function handleSearch(searchTerm) {
    history.push(`/search?subreddit=${searchTerm}`);
  }

  return (
    <SearchPageWrapper>
      <SearchBar handleSearch={handleSearch} />
    </SearchPageWrapper>
  );
}

export default SearchPage;
