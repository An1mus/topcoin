import React from 'react';

const CoinView = ({coin}) => {
	const {cmc_rank, name, quote: {USD: { price, percent_change_24h, market_cap, volume_24h}}} = coin;

	return (
		<tr>
			<th scope="row">{cmc_rank}</th>
			<td>{name}</td>
			<td>{price}</td>
			<td>{percent_change_24h}</td>
			<td>{market_cap}</td>
			<td>{volume_24h}</td>
		</tr>
	);
};

export default CoinView;
