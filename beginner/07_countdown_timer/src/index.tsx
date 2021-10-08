import React from 'react';
import ReactDOM from 'react-dom';

import CountdownTimer from './pages/CountdownTimer';

import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <CountdownTimer />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
