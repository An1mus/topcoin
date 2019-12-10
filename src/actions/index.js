import {CMC_API_CALL_TYPES} from './types';
import {getCoinsListData} from '../services/cmc';

/**
 * getCMCData - triggers CoinMarketCap middleware service
 * @param coinsAmount {Number|"all"} - Number of coins to return from CoinMarketCap, "all" for all coins
 */
const getCMCData = (coinsAmount) => {
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

		/**
		 * Using this kind of error handling, since this data is not related to a single component,
		 * but to all the app.
		 */
		onRequest();
		try {
			let response = await getCoinsListData(coinsAmount);
			onSuccess(response);
		} catch (e) {
			onFailure(e);
		}
	}
};

export {getCMCData};
