import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    primary: {
      main: 'red',
      light: 'red',
      dark: 'red',
    },
    secondary: {
      main: 'blue',
      light: 'blue',
      dark: 'blue',
    },
  },
  fonts: ['Bitter', 'Montserrat'],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
