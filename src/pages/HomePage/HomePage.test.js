import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent, getByTestId } from '@testing-library/react';
import HomePage from './HomePage';
import Theme from '../../styles/theme';
import GlobalStyle from '../../styles/globalStyle';
import App from '../../components/App/App';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

describe('Elements render properly', () => {
  test('Check that home page renders its title', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Theme>
          <GlobalStyle />
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
    fireEvent.click(navLink);
    // Check that the full href given by the nav link matches the
    //    pathname from the history
    expect(navLink.href).toMatch(history.location.pathname);
  });

  // Clicking the button changes the URL

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
    expect(heroImg.href).toMatch(history.location.pathname);
  });
});
