import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Home } from './pages/Home';

import GlobalStyle from './global';

ReactDOM.render(
	<React.StrictMode>
		<Home />
		<GlobalStyle />
		<ToastContainer />
	</React.StrictMode>,
	document.getElementById('root'),
);
