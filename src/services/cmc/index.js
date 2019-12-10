/**
 *
 * CoinMarketCap API Service
 *
 * This service is triggers the endpoints of the middleware, dedicated to
 * retrieve data from CoinMarketCap API.
 */
import axios from 'axios';

import {CMC_API_URL_LISTING} from 'common/apiUrls/cmcUrls';

/**
 * Triggers the middleware to get the first 100 coins data from CMC API.
 * @return {Object}
 */
const getCoinsListData = async () => {
	let response;

	try {
		response = await axios.get(CMC_API_URL_LISTING);
	} catch (e) {
		return console.error(e);
	}

	if(response.status !== 200) {
		return console.log(response);
	}

	return response.data;
};

export { getCoinsListData };
