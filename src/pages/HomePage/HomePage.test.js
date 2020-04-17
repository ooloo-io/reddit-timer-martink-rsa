import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import Theme from '../../styles/theme';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { DEFAULT_PATH, DEFAULT_SUBREDDIT } from '../../config';

describe('Elements render properly', () => {
  test('Check that logo renders and links to homepage', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Theme>
          <Header />
        </Theme>
      </Router>,
    );
    const logo = getByTestId(container, 'header-logo');
    expect(logo).toBeInTheDocument();
    fireEvent.click(logo);
    expect(history.location.pathname).toEqual('/');
    expect(history.length).toBeGreaterThanOrEqual(2);
  });
  test('Check that home page renders its title', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Theme>
          <HomePage />
        </Theme>
      </Router>,
    );
    const linkElement = getByText(/No reactions to your reddit posts\?/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('URL changes when elements interacted with', () => {
  test('Clicking the first nav link changes the url', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Theme>
          <Header />
        </Theme>
      </Router>,
    );
    const navLink = getByTestId(container, 'navbar-0');
    expect(navLink).toBeInTheDocument();
    fireEvent.click(navLink);
    // Check that the full href given by the nav link matches the
    //    pathname from the history
    expect(history.location.pathname).toEqual(`/${DEFAULT_PATH}/${DEFAULT_SUBREDDIT}`);
    expect(history.length).toBeGreaterThanOrEqual(2);
  });

  test('Clicking the hero button changes the url', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Theme>
          <Hero />
        </Theme>
      </Router>,
    );
    const heroButton = getByTestId(container, 'hero-button');
    expect(heroButton).toBeInTheDocument();
    fireEvent.click(heroButton);
    expect(history.location.pathname).toEqual(`/${DEFAULT_PATH}/${DEFAULT_SUBREDDIT}`);
    expect(history.length).toBeGreaterThanOrEqual(2);
  });

  test('Clicking the hero image changes the url', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Theme>
          <Hero />
        </Theme>
      </Router>,
    );
    const heroImg = getByTestId(container, 'hero-img');
    fireEvent.click(heroImg);
    expect(history.location.pathname).toEqual(`/${DEFAULT_PATH}/${DEFAULT_SUBREDDIT}`);
    expect(history.length).toBeGreaterThanOrEqual(2);
  });
});
