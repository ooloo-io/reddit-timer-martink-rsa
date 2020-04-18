import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, screen, cleanup, waitFor, waitForElementToBeRemoved, user,
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


function getHeatmapValuesFlattened(dataArray) {
  const parsedData = parseRedditData(dataArray);
  return parsedData.map((day) => day.map((hour) => hour.length)).flat();
}

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

describe('Error and heatmap display states', () => {
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
  beforeEach(() => {
    return initializeFoodDatabase();
  });
  test('Heatmap values matches dummy data', async () => {
    // Get dummy values in 1d array for comparison with heatmap
    const dummyHeatmapValues = getHeatmapValuesFlattened(dummyPosts);
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
  test('Heatmap displays the correct timezone message', async () => {
    // Get dummy values in 1d array for comparison with heatmap
    axiosMock.get.mockResolvedValueOnce({ data: dummyPosts });
    const { getByTestId } = renderWithRouter(
      <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
    );
    // Wait for loading spinner to disappear
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    // Check for heatmap
    const heatmap = getByTestId('heatmap');
    expect(heatmap).toBeInTheDocument();

    // Time message is showing
    const timeMessage = getByTestId('time-message');
    expect(timeMessage).toBeInTheDocument();
    expect(timeMessage.textContent).toBe('All times are shown in your timezone: UTC');
    expect(axiosMock.get).toHaveBeenCalledTimes(5);
  });
});

describe('Posts table', () => {
  test('Table shows when button is clicked depending on value', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: dummyPosts });
    const { getByTestId, getAllByTestId, queryByTestId } = renderWithRouter(
      <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
    );
    // Wait for loading spinner to disappear
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    // Check for heatmap
    const heatmap = getByTestId('heatmap');
    expect(heatmap).toBeInTheDocument();
    // Go through all buttons and:
    //    Check the table doesn't show when posts are 0
    //    Check that table shows when posts > 0
    const heatmapButtons = getAllByTestId('heatmap-button');
    for (let i = 0; i < heatmapButtons.length; i += 1) {
      const button = heatmapButtons[i];
      fireEvent.click(button);
      const buttonValue = parseInt(button.textContent, 10);
      if (buttonValue === 0) {
        const heatmapTable = queryByTestId('heatmap-table');
        expect(heatmapTable).toBeNull();
      } else {
        const heatmapTable = getByTestId('heatmap-table');
        expect(heatmapTable).toBeInTheDocument();
      }
    }
    expect(axiosMock.get).toHaveBeenCalledTimes(6);
  });
});
