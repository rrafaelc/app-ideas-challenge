import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import { GlobalStyle } from './styles/global';

import ModalProvider from './context/ModalContext';

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<App />
		</ModalProvider>
		<GlobalStyle />
	</React.StrictMode>,
	document.getElementById('root'),
);
