/* eslint-disable camelcase */
import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, cleanup, waitForElementToBeRemoved,
} from '@testing-library/react';
import axiosMock from 'axios';
import { SEARCH_PATH, DEFAULT_SUBREDDIT } from '../../config';
import { dummyPosts } from '../../dummyData';
import Theme, { theme } from '../../styles/theme';
import SearchPage, { parseRedditData } from './SearchPage';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { displayHHMM } from './Heatmap/PostsTable/PostsTable';

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
  if (mockState === 'pass') {
    axiosMock.get.mockResolvedValueOnce({ data });
  } else if (mockState === 'fail') {
    axiosMock.get.mockRejectedValue({ data });
  }
  return renderWithRouter(
    <SearchPage />, SEARCH_PATH, DEFAULT_SUBREDDIT,
  );
}

function getHeatmapValues(dataArray) {
  const parsedData = parseRedditData(dataArray);
  return parsedData.map((day) => day.map((hour) => hour.length)).flat();
}

describe('Search controls', () => {
  test('Default input value is used when search page is loaded', async () => {
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
  test('Heatmap elements use the correct theme colours', async () => {
    const { getByTestId, getAllByTestId } = setup('pass', dummyPosts);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(getByTestId('loading-spinner'));
    const heatmap = getByTestId('heatmap');
    expect(heatmap).toBeInTheDocument();
    // Checking buttons
    const heatmapButtons = getAllByTestId('heatmap-button');
    for (let i = 0; i < heatmapButtons.length; i += 1) {
      const button = heatmapButtons[i];
      const buttonValue = parseInt(button.textContent, 10);
      if (buttonValue <= 10) {
        expect(button).toHaveStyleRule('background', theme.heatmapColors[buttonValue]);
      } else {
        expect(button).toHaveStyleRule('background', theme.heatmapColors[10]);
      }
    }
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

function getPosts(data, day, hour) {
  const currentTable = data[day][hour];
  const posts = [];
  for (let i = 0; i < currentTable.length; i += 1) {
    const {
      author,
      title,
    } = currentTable[i];
    // Convert date obj to "hh:mm" with am/pm suffixed
    const created = displayHHMM(currentTable[i].created);
    // Can't test number values, need to convert to string
    const num_comments = currentTable[i].num_comments.toString();
    const score = currentTable[i].score.toString();
    posts.push(author);
    posts.push(title);
    posts.push(created);
    posts.push(score);
    posts.push(num_comments);
  }
  return posts;
}

function getDay(index) {
  return Math.floor(index / 24);
}

function getHour(index) {
  return Math.floor(index % 24);
}

describe('Posts table', () => {
  test('Table shows when buttons are clicked, depending on value, and displays table rows', async () => {
    const {
      findByTestId,
      getAllByTestId,
      getAllByText,
    } = setup('pass', dummyPosts);
    const data = parseRedditData(dummyPosts);
    await findByTestId('heatmap');
    const heatmapButtons = getAllByTestId('heatmap-button');

    let postsValues;
    let day;
    let hour;
    let button;

    for (let i = 0; i < heatmapButtons.length; i += 1) {
      day = getDay(i);
      hour = getHour(i);
      button = heatmapButtons[i];
      if (parseInt(button.textContent, 10) !== 0) {
        fireEvent.click(button);
        postsValues = getPosts(data, day, hour);
        for (let j = 0; j < postsValues.length; j += 1) {
          const cellValue = postsValues[j];
          getAllByText(cellValue);
        }
      }
    }
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});