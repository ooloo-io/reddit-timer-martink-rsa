import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, screen, cleanup, waitFor, waitForElementToBeRemoved,
} from '@testing-library/react';
import axiosMock from 'axios';
import { DEFAULT_SUBREDDIT, DEFAULT_PATH } from '../../config';
import { dummyPosts } from '../../testData';
import Theme from '../../styles/theme';
import SearchPage, { parseRedditData } from './SearchPage';
import '@testing-library/jest-dom/extend-expect';

const NUM_GRID_ITEMS = 7 * 24; // days * hours

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

describe('Checking error and heatmap display states', () => {
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
    axiosMock.get.mockResolvedValueOnce({ data: dummyPosts });
    const { getByTestId } = renderWithRouter(
      <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
    );
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    expect(getByTestId('heatmap')).toBeInTheDocument();
    expect(axiosMock.get).toHaveBeenCalledTimes(3);
  });
});

describe('Heatmap values', () => {
  test('Heatmap values matches dummy data', async () => {
    const parsedData = parseRedditData(dummyPosts);
    // Get dummy values in 1d array for comparison with heatmap
    const dummyHeatmapValues = parsedData.map((day) => day.map((hour) => hour.length)).flat();
    axiosMock.get.mockResolvedValueOnce({ data: dummyPosts });
    const { getByTestId, getAllByTestId } = renderWithRouter(
      <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
    );
    // Wait for loading spinner to disappear
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    // Check for heatmap
    const heatmap = getByTestId('heatmap');
    expect(heatmap).toBeInTheDocument();
    // Checking buttons
    const heatmapValues = getAllByTestId('heatmap-button').map((button) => parseInt(button.textContent, 10));
    // Make sure number of buttons in heatmap is correct
    expect(heatmapValues.length).toEqual(NUM_GRID_ITEMS);
    // Heatmap values must match dummy data values
    expect(heatmapValues).toEqual(dummyHeatmapValues);
    expect(axiosMock.get).toHaveBeenCalledTimes(4);
  });
});
