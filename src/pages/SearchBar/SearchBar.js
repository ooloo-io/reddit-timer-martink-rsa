import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import {
  SearchBarForm,
  Heading,
  SearchBarContainer,
  Prefix,
  Input,
} from './SearchBar.style';

function SearchBar(props) {
  // Get the subreddit value from the URL
  const [searchTerm, setSearchTerm] = useState(useParams().subreddit);
  const [isValidSearch, setIsValidSearch] = useState(true);
  const { handleSearch } = props;

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidSearch) {
      handleSearch(searchTerm);
    }
  }

  // Two validation methods are used to:
  //      1. Limit the user input so only alphanumerical and underscores are allowed
  //         This limit is based on Reddit specs for naming a subreddit
  //      2. Parse the entire string to check if it's a valid subreddit name
  //         This validation is to ensure that the query string will be a valid
  //         search query e.g. must start with a letter, be >= 3 chars
  function handleChange(event) {
    // 1. Input validation for each char:
    //    This will check if the last value of the input control is either
    //    alphanumerical or underscore. This is checking the last letter
    //    instead of parsing the input value which seems unnecessary.
    //    No input will be allowed unless it's alphanumerical or underscore
    const { value } = event.currentTarget;
    const regexValidInput = /\w+/;
    const isValidInput = regexValidInput.test(value[value.length - 1]);
    if (isValidInput) {
      setSearchTerm(value);
      // 2. Check the entire query string is valid
      //    First char must be a letter, then any alphanumerical & _ characters allowed
      const regexValidQuery = /^[a-z]{1}[\w]{2,20}$/gmi;
      setIsValidSearch(regexValidQuery.test(value));
    }
  }

  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <Heading>Find the best time for a subreddit</Heading>
      <SearchBarContainer>
        <Prefix>r /</Prefix>
        <Input value={searchTerm} onChange={handleChange} maxLength="21" title="Search subreddit" name="subreddit" aria-label="Search subreddit" />
        <Button type="submit" inactive={!isValidSearch}>Search</Button>
      </SearchBarContainer>
    </SearchBarForm>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
