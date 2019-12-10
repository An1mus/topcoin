/**
 * CoinMarketCap API endpoints and headers
 * * * * * * * * * * * * * * * NOTE * * * * * * * * * * * * * * *
 * The API endpoints are provided through the middleware, that is also committed to this repo.
 * Such structure is necessary due to the fact, that new CMC API restricts front-end calls.
 */

const CMC_API_URL = 'http://localhost:5000/';
const CMC_API_URL_LISTING = `${CMC_API_URL}cmc`; //coin listing for the latest data

export {CMC_API_URL_LISTING};
