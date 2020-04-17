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

test('Load data', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: ['Hello'],
  });

  // Render the component
  const { getByTestId, findByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );

  /* await waitForElementToBeRemoved(getByTestId('loading-spinner')).then(async () =>
    expect(await findByTestId('heatmap')).toBeInTheDocument(),
  ); */
  await waitForElementToBeRemoved(getByTestId('loading-spinner'), { timeout: 5000 });
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
