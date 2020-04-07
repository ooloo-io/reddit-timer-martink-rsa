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
  font: {
    family: ['"Bitter", sans-serif', '"Montserrat", sans-serif'],
    size: {
      xs: '14px', // 14px
      s: '15px', // 16px
      m: '16px', // 15px
      l: '18px', // 18px
    },
  },
  spacing: {
    baseline: '20px',
    headerLinks: '20px',
    letters: '0.03px',
  },
  breakpoint: {
    small: '768px',
  },
  heatmapColors:
    [
      '#e0e592',
      '#aed396',
      '#a9d194',
      '#a0ce93',
      '#99cd94',
      '#8cc894',
      '#5eb391',
      '#5db492',
      '#5cb391',
      '#5aad8c',
      '#3984a3',
    ],
  heatmap: {
    boxSize: 40,
    day: {
      background: '#1e2537',
    },
    hour: {
      background: 'linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%)',
      border: '1px solid #f3f3f3',
    },
    cell: {
      border: 'solid 1px #1e2537',
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
