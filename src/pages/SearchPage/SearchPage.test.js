import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react';
import SearchPage from './SearchPage';
import Theme from '../../styles/theme';
import GlobalStyle from '../../styles/globalStyle';
import App from '../../components/App/App';
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'

/* test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </Router>,
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(container.innerHTML).toMatch('You are home');

  fireEvent.click(getByText(/about/i));

  // check that the content changed to the new page
  expect(container.innerHTML).toMatch('You are on the about page');
});
 */

test('Check that search page renders its title', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Theme>
        <GlobalStyle />
        <SearchPage />
      </Theme>
    </Router>,
  );
  const linkElement = getByText(/Find the best time for a subreddit/i);
  expect(linkElement).toBeInTheDocument();
});
