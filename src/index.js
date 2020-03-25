import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Theme from './styles/theme';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root'),
);
