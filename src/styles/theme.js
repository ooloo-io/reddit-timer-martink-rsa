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
      main: '#feb756',
      light: '#feb756',
      dark: '#feb756',
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
      accent: '#e6e6e6',
      text: '#9e9e9e',
      nav: '#636363',
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
  heatmapColors: {
    0: '#e0e592',
    1: '#aed396',
    2: '#a9d194',
    3: '#a0ce93',
    4: '#99cd94',
    5: '#8cc894',
    6: '#5eb391',
    7: '#5db492',
    8: '#5cb391',
    9: '#5aad8c',
    10: '#3984a3',
  },
  heatmapStyle: {
    day: {
      background: '#1e2537',
    },
  },

};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
