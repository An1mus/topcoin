import {combineReducers} from 'redux';
import {cmcAPIReducers} from 'cmcAPIReducers';

const rootReducer =  combineReducers({
	cmcAPIReducers,
});

export default rootReducer;
