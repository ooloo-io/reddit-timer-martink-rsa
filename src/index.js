import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Theme from './styles/theme';
import './index.css';
import GlobalStyle from './styles/globalStyle';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Theme>
    <GlobalStyle />
    <App />
  </Theme>,
  document.getElementById('root'),
);
