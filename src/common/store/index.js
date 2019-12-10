import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger'; // Just for testing

import rootReducer from "reducers";

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;
