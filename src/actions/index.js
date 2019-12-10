import { CMC_API_CALL_TYPES } from 'types/cmcApiCalls';
import { getCoinsListData } from 'services/cmc';

// TODO: addd query string
const getCMCData = () => {
	return dispatch => {
		const onRequest = () => {
			dispatch(CMC_API_CALL_TYPES.REQUEST, {isRequesting: true});
		};

		const onSuccess = (response) => {
			dispatch(CMC_API_CALL_TYPES.SUCCESS, {isRequesting: false, response});
		};

		const onFailure = (e) => {
			dispatch(CMC_API_CALL_TYPES.FAILURE, {isRequesting: false, error: e});
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
