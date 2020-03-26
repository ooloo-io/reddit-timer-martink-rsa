import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Theme from './styles/theme';
import './index.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root'),
);
