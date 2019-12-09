import axios from 'axios';

import {CMC_API_URL_LISTING, CMC_HEADERS} from 'common/api/cmcUrls';

const getCoinData = async () => {
	let response;

	try {
		response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
			headers: {
				'X-CMC_PRO_API_KEY': 'c9f5efce-aa76-4376-8a70-c93924af1b62',
				'Accept': 'application/json; charset=utf-8'
			},
		});
	} catch (e) {
		return console.error(e);
	}

	if(!response.ok) {
		return console.log(response);
	}

	return response.data;
};

export default getCoinData;
