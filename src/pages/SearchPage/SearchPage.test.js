import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, screen, cleanup, waitFor, waitForElementToBeRemoved,
} from '@testing-library/react';
import axiosMock from 'axios';
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

test('Will show an error message when there are no results', async () => {
  axiosMock.get.mockResolvedValueOnce({ data: [] });
  const { getByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );
  expect(getByTestId('loading-spinner')).toBeInTheDocument();
  await waitForElementToBeRemoved(getByTestId('loading-spinner'));
  expect(getByTestId('error')).toBeInTheDocument();
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});

test('Will show an error message when the API call fails', async () => {
  axiosMock.get.mockRejectedValue({ data: [] });
  const { getByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );
  expect(getByTestId('loading-spinner')).toBeInTheDocument();
  await waitForElementToBeRemoved(getByTestId('loading-spinner'));
  expect(getByTestId('error')).toBeInTheDocument();
  expect(axiosMock.get).toHaveBeenCalledTimes(2);
});

test('Will load heatmap with real test data', async () => {
  axiosMock.get.mockResolvedValueOnce({ data: testResultsData });
  const { getByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );
  expect(getByTestId('loading-spinner')).toBeInTheDocument();
  await waitForElementToBeRemoved(getByTestId('loading-spinner'));
  expect(getByTestId('heatmap')).toBeInTheDocument();
  expect(axiosMock.get).toHaveBeenCalledTimes(3);
});

// INCOMPLETE: DOES NOT TEST THE DATA
test('Heatmap data is accurate', async () => {
  axiosMock.get.mockResolvedValueOnce({ data: testResultsData });
  const { getByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );
  expect(getByTestId('loading-spinner')).toBeInTheDocument();
  await waitForElementToBeRemoved(getByTestId('loading-spinner'));
  expect(getByTestId('heatmap')).toBeInTheDocument();
  expect(axiosMock.get).toHaveBeenCalledTimes(4);
});

/* await waitForElementToBeRemoved(getByTestId('loading-spinner')).then(async () =>
    expect(await findByTestId('heatmap')).toBeInTheDocument(),
  ); */
