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
  test('The hero button renders', () => {
    const history = createMemoryHistory();
    const { getByText } = setup(history);
    const heroButton = getByText(/show me the best time/i);
    expect(heroButton).toBeInTheDocument();
  });
  test('The hero image renders', () => {
    const history = createMemoryHistory();
    const { getByRole } = setup(history);
    const heroImg = getByRole('img');
    expect(heroImg.alt).toBe('javascript');
    expect(heroImg).toBeInTheDocument();
  });
});

describe('URL changes when elements interacted with', () => {
  test('Clicking the hero button changes the url', () => {
    const history = createMemoryHistory();
    const { getByText } = setup(history);
    const heroButton = getByText(/show me the best time/i);
    expect(heroButton).toBeInTheDocument();
    fireEvent.click(heroButton);
    expect(history.location.pathname).toEqual(searchPath);
    expect(history.length).toBe(2);
  });

  test('Clicking the hero image changes the url', () => {
    const history = createMemoryHistory();
    const { getByRole } = setup(history);
    const heroImg = getByRole('img');
    fireEvent.click(heroImg);
    expect(history.location.pathname).toEqual(searchPath);
    expect(history.length).toBe(2);
  });
});