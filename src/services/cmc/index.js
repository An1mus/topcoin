import axios from 'axios';

import {CMC_API_URL_LISTING} from 'common/api/cmcUrls';

const getCoinData = async () => {
	let response;

	try {
		response = await axios.get(CMC_API_URL_LISTING);
	} catch (e) {
		return console.error(e);
	}

	if(!response.ok) {
		return console.log(response);
	}

	return response.data;
};

export default getCoinData;
