import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducers from './store/reducers'

const store = createStore(rootReducers)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
