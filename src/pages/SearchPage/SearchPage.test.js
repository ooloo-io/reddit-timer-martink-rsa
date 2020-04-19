import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, cleanup, waitFor, waitForElementToBeRemoved, waitForElement,
} from '@testing-library/react';
import axiosMock from 'axios';
import { DEFAULT_SUBREDDIT, DEFAULT_PATH } from '../../config';
import { dummyPosts } from '../../dummyData';
import Theme from '../../styles/theme';
import SearchPage, { parseRedditData } from './SearchPage';
import '@testing-library/jest-dom/extend-expect';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
const NUM_GRID_ITEMS = 7 * 24; // days * hours

// Avoiding mutating global variables (beforeEach/afterEach) for reasons
//    argued here: https://kentcdodds.com/blog/avoid-nesting-when-youre-testing

jest.mock('axios');
afterEach(() => {
  afterEach(cleanup);
  jest.clearAllMocks();
});

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

function setup(mockState = 'pass', data = []) {
  const oneYearAgo = Math.round(new Date().getTime() / 1000) - ONE_YEAR_IN_SECONDS;
  const url = `https://api.pushshift.io/reddit/search/submission/?${DEFAULT_PATH}=${DEFAULT_SUBREDDIT}&sort=desc&sort_type=score&after=${oneYearAgo}&size=500`;
  if (mockState === 'pass') {
    axiosMock.get.mockResolvedValueOnce({ data });
  } else if (mockState === 'fail') {
    axiosMock.get.mockRejectedValue({ data });
  }
  const { getByTestId, getAllByTestId, queryByTestId } = renderWithRouter(
    <SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT,
  );
  return {
    getByTestId,
    getAllByTestId,
    queryByTestId,
    url,
  };
}

function getHeatmapValues(dataArray) {
  const parsedData = parseRedditData(dataArray);
  return parsedData.map((day) => day.map((hour) => hour.length)).flat();
}

describe('Search controls', () => {
  test('Default input is used when search page is loaded', async () => {
    const { getByTestId } = setup();
    const input = getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input.value).toEqual(DEFAULT_SUBREDDIT);
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
  test('Can change the subreddit being searched', async () => {
    const NEW_SUBREDDIT = 'learnprogramming';
    const { getByTestId } = setup('pass', dummyPosts);
    const button = getByTestId('search-button');
    const input = getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input.value).toEqual(DEFAULT_SUBREDDIT);
    expect(axiosMock.get).toBeCalledWith(expect.stringMatching(DEFAULT_SUBREDDIT));
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    fireEvent.change(input, { target: { value: NEW_SUBREDDIT } });
    expect(input.value).toEqual(NEW_SUBREDDIT);
    fireEvent.click(button);
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    expect(axiosMock.get).toHaveBeenCalledTimes(2);
    expect(axiosMock.get).toBeCalledWith(expect.stringMatching(NEW_SUBREDDIT));
  });
  test('Search button is disabled when loading takes place', async () => {
    const { getByTestId } = setup();
    const button = getByTestId('search-button');
    const input = getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input.value).toEqual(DEFAULT_SUBREDDIT);
    expect(button).toBeDisabled();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});

describe('Error and heatmap display states', () => {
  test('Will show an error message when there are no results', async () => {
    const { getByTestId } = setup();
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    const error = getByTestId('error');
    expect(error).toBeInTheDocument();
    expect(error.textContent).toBe('0 results returned.');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
  test('Will show an error message when the API call fails', async () => {
    const { getByTestId } = setup('fail');
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    const error = getByTestId('error');
    expect(error).toBeInTheDocument();
    expect(error.textContent).toBe('There was an error processing your request.');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
  test('Will load heatmap with real test data', async () => {
    const { getByTestId } = setup('pass', dummyPosts);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    expect(getByTestId('heatmap')).toBeInTheDocument();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});

describe('Heatmap values', () => {
  test('Heatmap values matches dummy data', async () => {
    const dummyHeatmapValues = getHeatmapValues(dummyPosts);
    const { getByTestId, getAllByTestId } = setup('pass', dummyPosts);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    const heatmap = getByTestId('heatmap');
    expect(heatmap).toBeInTheDocument();
    // Checking buttons
    const heatmapValues = getAllByTestId('heatmap-button').map((button) => parseInt(button.textContent, 10));
    // Make sure number of buttons in heatmap is correct
    expect(heatmapValues.length).toEqual(NUM_GRID_ITEMS);
    // Heatmap values must match dummy data values
    expect(heatmapValues).toEqual(dummyHeatmapValues);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
  test('Heatmap displays the correct timezone message', async () => {
    const { getByTestId } = setup('pass', dummyPosts);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    const heatmap = getByTestId('heatmap');
    expect(heatmap).toBeInTheDocument();

    // Time message is showing
    const timeMessage = getByTestId('time-message');
    expect(timeMessage).toBeInTheDocument();
    expect(timeMessage.textContent).toBe('All times are shown in your timezone: UTC');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});

describe('Posts table', () => {
  test('Table shows when buttons are clicked and depending on value', async () => {
    const { getByTestId, getAllByTestId, queryByTestId } = setup('pass', dummyPosts);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
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
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
