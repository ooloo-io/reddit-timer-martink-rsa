import React from 'react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import SearchPage from './SearchPage';
import Theme from '../../styles/theme';
import App from '../../components/App/App';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { DEFAULT_SUBREDDIT, DEFAULT_PATH } from '../../config';
import user from '@testing-library/user-event';

afterEach(cleanup);

/* beforeEach(() => {
  app = render(
    <MemoryRouter>
      <Theme>
        <App />
      </Theme>
    </MemoryRouter>
  );
  container = app.container;
});
afterEach(() => {
  cleanup();
  app.remove();
  app = null;
}); */

const renderWithRouter = (component, path, page) => {
  const url = `/${path}/${page}`;
  return (
    render(
      <MemoryRouter initialEntries={[url]}>
        <Theme>
          <Route path={`/${path}/:${page}`}>{component}</Route>
        </Theme>
      </MemoryRouter>,
    )
  );
};

const renderWithHistory = (component, subreddit) => {
  const history = createMemoryHistory();
  return (
    render(
      <Router history={history}>
        <Theme>
          {component}
        </Theme>
      </Router>,
    )
  );
};

test('Search input value is set to default value', () => {
  const { getByTestId } = renderWithRouter(<App />, DEFAULT_PATH, DEFAULT_SUBREDDIT);
  const searchLink = getByTestId('navbar-0');
  user.click(searchLink);
  const searchInput = getByTestId('search-input');
  expect(searchInput.value).toBe(DEFAULT_SUBREDDIT);
});

/* const renderWithRouter = (component, subreddit) => {}
  render(
    <MemoryRouter initialEntries={[`/search/${subreddit}`]}>
      <Theme>
        <Route path={`/search/${subreddit}`}>{component}</Route>
      </Theme>
    </MemoryRouter>,
  );
 */

/* const renderWithRouter = (component, path, page) => {
  const url = `/${path}/${page}`;
  return (
    render(
      <MemoryRouter initialEntries={[url]}>
        <Theme>
          <Route path={url}>{component}</Route>
        </Theme>
      </MemoryRouter>,
    )
  );
}; */

/* test('Check that search input is changed correctly', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Theme>
        <App />
      </Theme>
    </Router>,
  );
  const searchLink = screen.getByTestId('navbar-0');
  user.click(searchLink);
  const searchInput = screen.getByTestId('search-input');
  // Simulating an onChange event instead of using typing simulation
  fireEvent.change(searchInput, { target: { value: 'learnprogramming' } });
  expect(searchInput.value).toBe('learnprogramming');
}); */

/* test('Search input value is set to default value', () => {
  const { getByTestId } = renderWithHistory(<SearchPage />, DEFAULT_PATH, DEFAULT_SUBREDDIT);
  const searchInput = getByTestId('search-input');
  expect(searchInput.value).toBe(DEFAULT_SUBREDDIT);
}); */


/* test('Search input value is set to default value', () => {
  const homePage = app;
  const searchInput = homePage.getByTestId('search-input');
  expect(searchInput.value).toBe(DEFAULT_SUBREDDIT);
}); */

/* test('Search input is set to default', () => {
  const homePage = app;
  const searchLink = homePage.getByTestId('navbar-0');
  user.click(searchLink);
  const searchInput = homePage.getByTestId('search-input');
  expect(searchInput.value).toBe(DEFAULT_SUBREDDIT);
}); */
/* test('User can change search input', () => {
  const homePage = renderHomePage();
  const searchLink = homePage.getByTestId('navbar-0');
  user.click(searchLink);
  const searchInput = homePage.getByTestId('search-input');
  // Simulating an onChange event instead of using typing simulation
  fireEvent.change(searchInput, { target: { value: 'learnprogramming' } });
  expect(searchInput.value).toBe('learnprogramming');
});
 */
