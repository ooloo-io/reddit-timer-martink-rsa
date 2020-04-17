import React from 'react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, screen, cleanup, waitFor, waitForElementToBeRemoved,
} from '@testing-library/react';
import axiosMock from 'axios';
import { createMemoryHistory } from 'history';
import user from '@testing-library/user-event';
import SearchPage, { parseRedditData, handleSearch } from './SearchPage';
import Theme from '../../styles/theme';
import App from '../../components/App/App';
import '@testing-library/jest-dom/extend-expect';
import { DEFAULT_SUBREDDIT, DEFAULT_PATH } from '../../config';
import SearchBar from './SearchBar/SearchBar';
import { testResultsData } from '../../testData';

jest.mock('axios');

afterEach(cleanup);

const renderWithRouter = (component, path, page) => {
  const url = `/${path}/${page}`;
  return (
    render(
      <MemoryRouter initialEntries={[url]}>
        <Theme>
          <Route path={`/${path}/:subreddit`}>{component}</Route>
        </Theme>
      </MemoryRouter>,
    )
  );
};

test('Load data', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: testResultsData,
    // data: { greeting: 'hello there' },
  });

  // Render the component
  const { getByTestId, findByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );

  const parsedData = parseRedditData(testResultsData);

  // await waitForElementToBeRemoved(getByTestId('loading-spinner'), { timeout: 5000 });
  // const loadingSpinner = findByTestId('loading-spinner');
  expect(await findByTestId('loading-spinner')).toBeInTheDocument();
  await waitForElementToBeRemoved(getByTestId('loading-spinner'), { timeout: 5000 });
  expect(await findByTestId('heatmap')).toBeInTheDocument();

  /* await waitFor(() => {
    expect(getByTestId('heatmap')).toBeInTheDocument();
  }); */

  expect(parseRedditData).toHaveBeenCalledTimes(1);
  // const heatmap = await waitFor(() => findByTestId('heatmap'));
});


/* test('Load data', async () => {
  // Render the component
  const { getByTestId, findByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );


  axiosMock.get.mockResolvedValueOnce({
    data: testResultsData,
    // data: { greeting: 'hello there' },
  });

  // const parsedData = parseRedditData(testResultsData);

  await waitForElementToBeRemoved(getByTestId('loading-spinner'), { timeout: 5000 }).then(() =>
    expect(getByTestId('heatmap')).toBeInTheDocument(),
  );

  await waitFor(() => {
    expect(getByTestId('heatmap')).toBeInTheDocument();
  });


  // const heatmap = await waitFor(() => findByTestId('heatmap'));
}); */

// The test below manually changes the subreddit and then
//    starts the search. It is proving to be difficult to work with as the page
//    automatically performs a search on its own, leading to two separate searches.

/* test('Load data', async () => {
  // Render the component
  const { getByTestId, findByTestId } = renderWithRouter(<SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT);

  // Change and check the search input
  const searchInput = getByTestId('search-input');
  fireEvent.change(searchInput, { target: { value: 'learnprogramming' } });
  expect(searchInput.value).toBe('learnprogramming');

  // Click the search button
  const searchButton = getByTestId('search-button');
  fireEvent.click(searchButton);

  // Mock the API pull
  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  });

  // Check the spinner is showing
  const spinner = getByTestId('loading-spinner');
  expect(spinner).toBeInTheDocument();

  await waitForElementToBeRemoved(spinner).then(() =>
    console.log('Element no longer in DOM')
  )


  const heatmap = await waitFor(() => findByTestId('heatmap'));

  expect(heatmap).toHaveTextContent('All times are shown in your timezone');
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toHaveAttribute('disabled');
});
 */
