import {CMC_API_CALL_TYPES} from './types';
import {getCoinsListData} from 'services/cmc';

// TODO: addd query string
const getCMCData = () => {
	return dispatch => {
		const onRequest = () => {
			dispatch({type: CMC_API_CALL_TYPES.REQUEST, isRequesting: true});
		};

		const onSuccess = (response) => {
			dispatch({type: CMC_API_CALL_TYPES.SUCCESS, isRequesting: false, coinsData: response});
		};

		const onFailure = (e) => {
			dispatch({type: CMC_API_CALL_TYPES.FAILURE, isRequesting: false, error: e});
		};

		onRequest();
		try {
			let response = getCoinsListData();
			onSuccess(response);
		} catch (e) {
			onFailure(e);
		}
	}
};

export {getCMCData};
