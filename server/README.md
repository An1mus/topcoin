###Middleware setup

This middleware is meant to work with latest 
[CoinMarketCap API.](https://coinmarketcap.com/api/documentation/v1/)
<br/><br/>
To use the API, provide your API key on the server side.<br/>
Current setup expects the secret key to be exported from `/config/index.js` as a
`API_KEY_HEADER` variable.<br/>
`API_KEY_HEADER` is an object of type `{"X-CMC_PRO_API_KEY": string}`.




