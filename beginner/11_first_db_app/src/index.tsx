import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './pages/Dashboard';

import GlobalStyle from './global';

ReactDOM.render(
	<React.StrictMode>
		<Dashboard />
		<GlobalStyle />
	</React.StrictMode>,
	document.getElementById('root'),
);
