/**
 *
 * CoinMarketCap API Service
 *
 * This service is triggers the endpoints of the middleware, dedicated to
 * retrieve data from CoinMarketCap API.
 */
import axios from 'axios';

import {CMC_API_URL_LISTING} from '../../common/apiUrls/cmcUrls';

/**
 * Triggers the middleware to get the first 100 coins data from CMC API.
 * @param coinsAmount - {Number|String} - Number of coins to return from CoinMarketCap, "all" for all coins
 * @return {Array[]} - Array filled with data on the coins
 */
const getCoinsListData = async (coinsAmount) => {
	let {data} = await axios.post(CMC_API_URL_LISTING, {amount: coinsAmount});
	return data;
};


export { getCoinsListData };
