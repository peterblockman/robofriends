import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; //logging the action
import thunkMiddleware from 'redux-thunk'; //wait and sees if any actions 
//return a function instead of an object, requestRobots
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers'

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});

const store = 
createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	// Provider pass down varibale store to app
	<Provider store={store}>  
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
