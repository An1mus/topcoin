import {CMC_API_CALL_TYPES} from '../actions/types'

const initalState = {isRequesting: false};

/**
 * CoinMarketCap API call reducer
 */
const cmcListCallReducer = (state = initalState, action) => {
	switch (action.type) {
		case CMC_API_CALL_TYPES.REQUEST:
			return Object.assign({}, {
				isRequesting: true,
				coinsData: state.coinsData ? state.coinsData : []
			});
		case CMC_API_CALL_TYPES.SUCCESS:
			return Object.assign({}, {isRequesting: false, coinsData: action.coinsData});
		case CMC_API_CALL_TYPES.FAILURE:
			return Object.assign({}, {isRequesting: false, error: action.error});
		default:
			return state;
	}
};

export {cmcListCallReducer};
