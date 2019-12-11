import React from 'react';

import {formatCrypto} from "../../../../common/formating";

const CoinView = ({coin}) => {
	const {cmc_rank, name, quote: {USD: { price, percent_change_24h, market_cap, volume_24h}}} = coin;

	return (
		<tr>
			<th scope="row">{cmc_rank}</th>
			<td>{name}</td>
			<td>${formatCrypto(price)}</td>
			<td>{formatCrypto(percent_change_24h)}%</td>
			<td>${formatCrypto(market_cap, 0)}</td>
			<td>${formatCrypto(volume_24h, 0)}</td>
		</tr>
	);
};

export default CoinView;
