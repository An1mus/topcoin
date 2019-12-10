import {combineReducers} from 'redux';
import {cmcListCallReducer} from './cmcAPIReducers';

const rootReducer =  combineReducers({
	cmcListCallReducer,
});

export default rootReducer;
