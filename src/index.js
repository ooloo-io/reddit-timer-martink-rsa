import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/App/App';
import Theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

ReactDOM.render(
  <Theme>
    <GlobalStyle />
    <App />
  </Theme>,
  document.getElementById('root'),
);
