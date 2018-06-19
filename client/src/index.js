// import 'materialize-css/dist/css/materialize.min.css';	//materialize CSS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

console.log("In src/index.js, reducers: ", reducers);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

console.log("In src/index.js, store:", store);

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);
