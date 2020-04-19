import React from 'react';
import { Router, Route } from 'react-router-dom';
import {
  render, fireEvent,
} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import Theme from '../../styles/theme';
import { DEFAULT_PATH, DEFAULT_SUBREDDIT } from '../../config';

const renderWithHistory = (component, history) => (
  render(
    <Router history={history}>
      <Theme>
        <Route path="/">{component}</Route>
      </Theme>
    </Router>,
  )
);

function setup() {
  const history = createMemoryHistory();
  const { getByTestId, getAllByTestId, queryByTestId } = renderWithHistory(
    <HomePage />, history,
  );
  return {
    getByTestId,
    getAllByTestId,
    queryByTestId,
    history,
  };
}

describe('Elements are rendered', () => {
  test('The hero button renders', () => {
    const { getByTestId } = setup();
    const heroButton = getByTestId('hero-button');
    expect(heroButton).toBeInTheDocument();
  });
  test('The hero image renders', () => {
    const { getByTestId } = setup();
    const heroImg = getByTestId('hero-img');
    expect(heroImg).toBeInTheDocument();
  });
});

describe('URL changes when elements interacted with', () => {
  test('Clicking the hero button changes the url', () => {
    const { getByTestId, history } = setup();
    const heroButton = getByTestId('hero-button');
    expect(heroButton).toBeInTheDocument();
    fireEvent.click(heroButton);
    expect(history.location.pathname).toEqual(`/${DEFAULT_PATH}/${DEFAULT_SUBREDDIT}`);
    expect(history.length).toBeGreaterThanOrEqual(2);
  });

  test('Clicking the hero image changes the url', () => {
    const { getByTestId, history } = setup();
    const heroImg = getByTestId('hero-img');
    fireEvent.click(heroImg);
    expect(history.location.pathname).toEqual(`/${DEFAULT_PATH}/${DEFAULT_SUBREDDIT}`);
    expect(history.length).toBeGreaterThanOrEqual(2);
  });
});
