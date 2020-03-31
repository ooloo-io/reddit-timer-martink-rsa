import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    primary: {
      main: '#fdb755',
      light: '#ffc372',
      dark: '#ce9648',
    },
    secondary: {
      main: 'blue',
      light: 'blue',
      dark: 'blue',
    },
    textPrimary: {
      main: '#000',
      light: '#707070',
      dark: '#000',
    },
    textSecondary: {
      main: '#c2c2c2',
      light: '#ebebeb',
      dark: '#8c8c8c',
    },
    gray: {
      main: '#93918f',
      light: '#FFFFFF',
      dark: '#000000',
    },
  },
  fonts: ['"Bitter", sans-serif', '"Montserrat", sans-serif'],
  spacing: {
    baseline: '20px',
    headerLinks: '20px',
    letters: '0.03px',
  },
  breakpoint: {
    small: '768px',
  },

};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
