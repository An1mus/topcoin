/**
 * @function formatCrypto - formats currency
 * This function is used by both views, and it has no place in controllers, that is why it is here
 * @param currency{Number|String} - representation of the currency to format
 * @param decimals{Number} - amount of decimals
 * @return {string} - formatted currency
 */
const formatCrypto = (currency, decimals = 2) => {
	// en-US locale corresponds to the requirement
	return Number((currency).toFixed(decimals)).toLocaleString('en-US')
};

/**
 * @function formatAxisLabel - shortens the label to a readable format
 * @param value {String} - unparsed label value
 * @return {String} - resulting label
 */
function formatAxisLabel(value) {
	const suffixes = ["", "t", "m", "b", "t"];
	const suffixNum = Math.floor(("" + value).length / 3);
	let shortValue = parseFloat((suffixNum != 0 ?
		(value / Math.pow(1000, suffixNum)) :
		value).toPrecision(2)
	);

	if (shortValue % 1 != 0) {
		shortValue = shortValue.toFixed(1);
	}
	return shortValue + suffixes[suffixNum];
}

export {formatCrypto, formatAxisLabel};
