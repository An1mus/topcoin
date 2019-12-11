import express from 'express';
import axios from 'axios';
import rp from 'request-promise';

const cmcMiddleWare = express.Router();

/**
 * I would host this middleware somewhere, but It could be interesting for you
 * to have a look at the code, that is why the token is not hidden
 */
const HEADERS = {
	'X-CMC_PRO_API_KEY': '0c820ad8-b596-4012-96b8-85cf946b3288'
};

const CMC_API = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

/**
 * Call for the listing API, for 100 coins
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

/**
 * Call for the listing API, with specified amount of coins
 */
cmcMiddleWare.post('/', (req, res, next) => {
	const {amount} = req.body;
	const resultingAmount = amount && amount === 'all' ? '500' : amount;

	const requestOptions = {
		method: 'GET',
		uri: CMC_API,
		qs: {
			'start': '1',
			'limit': resultingAmount,
		},
		headers: HEADERS,
		json: true,
		gzip: true
	};

	(async function call(){
		let apiResponse;

		try {
			apiResponse = await rp(requestOptions);
			const { data } = apiResponse;
			res.status(200).json(data);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		} finally {
			next();
		}
	}());
});

export default cmcMiddleWare;
