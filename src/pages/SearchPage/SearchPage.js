import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchPageWrapper from './SearchPage.style';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';

function SearchPage() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(
      'https://www.reddit.com/r/javascript/search.json?q=oop&limit=5',
      { mode: 'cors' },
    );
    if (response.status === 200) {
      setIsLoading(false);
      return response.json();
    }
    // Throw new error here
    return 0;
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
