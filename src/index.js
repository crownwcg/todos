import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(changeInput)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
