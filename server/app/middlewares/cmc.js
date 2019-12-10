import express from 'express';
import axios from 'axios';

const cmcMiddleWare = express.Router();

/**
 * I would host this middleware somewhere, but It could be interesting for you
 * to have a look at the code, that is why the token is not hidden
 */
const HEADERS = {
	'X-CMC_PRO_API_KEY': 'c9f5efce-aa76-4376-8a70-c93924af1b62',
	'Accept': 'application/json; charset=utf-8'
};

const CMC_API = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

/**
 * Call for the listing API, with all the coins
 */
cmcMiddleWare.get('/', (req, res, next) => {
	(async function call(){
		let apiResponse;

		try {
			apiResponse = await axios.get(CMC_API, {headers: HEADERS});
			const { data } = apiResponse.data;
			res.status(200).json(data);
		} catch (e) {
			res.status(500).json(e);
			res.write(e);
		} finally {
			next();
		}
	}());
});

export default cmcMiddleWare;
