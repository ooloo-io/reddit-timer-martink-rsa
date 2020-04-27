import React from 'react';
import { Router, Route } from 'react-router-dom';
import {
  render, fireEvent,
} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import Theme from '../../styles/theme';
import { getSearchPath } from '../../config';

const searchPath = getSearchPath();

const renderWithHistory = (component, history) => (
  render(
    <Router history={history}>
      <Theme>
        <Route path="/">{component}</Route>
      </Theme>
    </Router>,
  )
);

function setup(history) {
  return renderWithHistory(
    <HomePage />, history,
  );
}

describe('Elements are rendered', () => {
  test('The hero button renders', async () => {
    const history = createMemoryHistory();
    const { getByText } = setup(history);
    await getByText(/show me the best time/i);
  });
  test('The hero image renders', () => {
    const history = createMemoryHistory();
    const { getByRole } = setup(history);
    const heroImg = getByRole('img');
    expect(heroImg.alt).toBe('javascript');
  });
});

describe('URL changes when elements interacted with', () => {
  test('Clicking the hero button changes the url', () => {
    const history = createMemoryHistory();
    const { getByText } = setup(history);
    fireEvent.click(getByText(/show me the best time/i));
    expect(history.location.pathname).toEqual(searchPath);
    expect(history.length).toBe(2);
  });

  test('Clicking the hero image changes the url', () => {
    const history = createMemoryHistory();
    const { getByRole } = setup(history);
    fireEvent.click(getByRole('img'));
    expect(history.location.pathname).toEqual(searchPath);
    expect(history.length).toBe(2);
  });
});
