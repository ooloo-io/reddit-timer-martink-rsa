import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import ButtonInactive from '../../components/ButtonInactive/ButtonInactive';
import {
  SearchBarForm,
  Heading,
  SearchBarContainer,
  Prefix,
  Input,
} from './SearchBar.style';

function SearchBar(props) {
  // Get the subreddit value from the URL
  const [searchTerm, setSearchTerm] = useState((new URLSearchParams(window.location.search).get('subreddit')).slice(0, 21));
  const [isValidSearch, setIsValid] = useState(true);
  const { handleSearch } = props;

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidSearch) {
      handleSearch(searchTerm);
    }
  }

  function handleChange(event) {
    // Check if last letter of input is valid
    const { value } = event.currentTarget;
    const regexValidInput = /\w+/;
    const isValidInput = regexValidInput.test(value[value.length - 1]);
    if (isValidInput) {
      setSearchTerm(value);
    }
  }

  useEffect(() => {
    // Check the entire query string is valid, used for binary states
    const regexValidQuery = /^[a-z]{1}[\w]{2,20}$/gmi;
    setIsValid(regexValidQuery.test(searchTerm));
  }, [searchTerm]);

  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <Heading>Find the best time for a subreddit</Heading>
      <SearchBarContainer>
        <Prefix>r /</Prefix>
        <Input value={searchTerm} onChange={handleChange} maxLength="21" title="Search subreddit" name="subreddit" aria-label="Search subreddit" />
        {isValidSearch ? <Button type="submit">Search</Button> : <ButtonInactive as="div">Search</ButtonInactive>}
      </SearchBarContainer>
    </SearchBarForm>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
