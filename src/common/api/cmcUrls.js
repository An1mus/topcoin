/**
 * CoinMarketCap API endpoints and headers
 * * * * * * * * * * * * * * * NOTE * * * * * * * * * * * * * * *
 * The API KEY is openly supplied only for the testing.
 * The key provided is a sandbox key, but the only difference is,
 * the API domain.
 */

const API_KEY = 'c9f5efce-aa76-4376-8a70-c93924af1b62';
const CMC_API_URL = 'https://sandbox-api.coinmarketcap.com/v1/';
const CMC_API_URL_LISTING = `${CMC_API_URL}cryptocurrency/listings/latest`; //coin listing for the latest data
const CMC_HEADERS = {
	// Usually I would put it server side, and use Node middleware.
	// But this is a sandbox key, so it should be okay.
	'X-CMC_PRO_API_KEY': API_KEY,
	'Accept': 'application/json'
};

export {CMC_API_URL_LISTING, CMC_HEADERS};
