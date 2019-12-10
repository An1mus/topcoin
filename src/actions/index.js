import {CMC_API_CALL_TYPES} from './types';
import {getCoinsListData} from 'services/cmc';

// TODO: addd query string
const getCMCData = () => {
	return async (dispatch) => {
		const onRequest = () => {
			dispatch({type: CMC_API_CALL_TYPES.REQUEST});
		};

		const onSuccess = (response) => {
			dispatch({type: CMC_API_CALL_TYPES.SUCCESS, coinsData: response});
		};

		const onFailure = (e) => {
			dispatch({type: CMC_API_CALL_TYPES.FAILURE, error: e});
		};

		onRequest();
		try {
			let response = await getCoinsListData();
			onSuccess(response);
		} catch (e) {
			onFailure(e);
		}
	}
};

export {getCMCData};
