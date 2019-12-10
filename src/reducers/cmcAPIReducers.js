import {CMC_API_CALL_TYPES} from 'actions/types'

const initalState = {isRequesting: false};

/**
 * CMC API call reducer
 * @param state
 * @param action
 */
const cmcCallsReducers = (state = initalState, action) => {
	switch (action.type) {
		case CMC_API_CALL_TYPES.REQUEST:
			return Object.assign({}, {isRequesting: true});
		default:
			return state;
	}
};

export {cmcCallsReducers};
