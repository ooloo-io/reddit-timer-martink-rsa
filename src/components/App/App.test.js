import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Theme from '../../styles/theme';
import GlobalStyle from '../../styles/globalStyle';

const renderWithTheme = (component) => (
  render(
    <Theme>
      <GlobalStyle />
      {component}
    </Theme>,
  )
);

function setup() {
  const { getByTestId, getAllByTestId, queryByTestId } = renderWithTheme(
    <App />,
  );
  return {
    getByTestId,
    getAllByTestId,
    queryByTestId,
  };
}

describe('Header and footer', () => {
  test('Header is rendered', async () => {
    const { getByTestId } = setup();
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  test('Footer is rendered', async () => {
    const { getByTestId } = setup();
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
