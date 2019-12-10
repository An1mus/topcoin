import thunkMiddleware from 'redux-thunk';
import {applyMiddlewares, createStore } from 'redux';
import {createLogger} from 'redux-logger'; // Just for testing

import rootReducer from "reducers";

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddlewares(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;
