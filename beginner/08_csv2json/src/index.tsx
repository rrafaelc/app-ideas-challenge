import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
