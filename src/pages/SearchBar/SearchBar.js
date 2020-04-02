import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import ButtonInactive from '../../components/ButtonInactive/ButtonInactive';
import {
  SearchBarWrapper,
  SearchBarForm,
  Header,
  SearchBarContainer,
  Prefix,
  Input,
} from './SearchBar.style';

function SearchBar(props) {
  // Get the subreddit from the URL parameter
  const [searchTerm, setSearchTerm] = useState(new URLSearchParams(window.location.search).get('subreddit'));
  const [isValidSearch, setIsValid] = useState(true);
  const { handleSearch } = props;

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidSearch) {
      handleSearch(searchTerm);
    }
  }

  function handleChange(event) {
    const { value } = event.currentTarget;
    // Alphanumerical and underscore. First char must be a letter
    const regexValidInput = /^[a-z]?[a-z0-9_]{0,20}$/gmi;
    // Check each letter according to spec
    const isValidInput = regexValidInput.test(value);
    if (isValidInput) {
      setSearchTerm(() => value);
    }
  }

  useEffect(() => {
    // Check the entire query string is valid, used for binary states
    const regexValidQuery = /^[a-z]{1}[a-z0-9_]{2,20}$/gmi;
    setIsValid(regexValidQuery.test(searchTerm));
  }, [searchTerm]);

  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={handleSubmit}>
        <Header>Find the best time for a subreddit</Header>
        <SearchBarContainer>
          <Prefix>r /</Prefix>
          <Input value={searchTerm} onChange={handleChange} title="Search subreddit" name="subreddit" aria-label="Search subreddit" />
          {isValidSearch ? <Button type="submit">Search</Button> : <ButtonInactive as="div">Search</ButtonInactive>}
        </SearchBarContainer>
      </SearchBarForm>
    </SearchBarWrapper>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
