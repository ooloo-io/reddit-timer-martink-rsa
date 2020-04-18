import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Theme from '../../styles/theme';
import GlobalStyle from '../../styles/globalStyle';

test('App renders without error', () => {
  const { getByText } = render(
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>,
  );
  const linkElement = getByText(/No reactions to your reddit posts\?/i);
  expect(linkElement).toBeInTheDocument();
});


