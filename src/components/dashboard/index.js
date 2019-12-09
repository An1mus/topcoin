import React from "react";
import STUBDATA from '../../common/stubdata';

const Dashboard = () => {
	const columns = ['Rank', 'Name', 'Price', 'Price Change (24h)', 'Market Cap', 'Volume (24h)'];

	return (
		<>
			<h2>Coins Overview</h2>
			<table className='table'>
				<thead className='thead-light'>
				<tr>
					{columns.map(col => <th>{col}</th>)}
				</tr>
				</thead>
				<tbody>
				{STUBDATA.map(coin => {
					return (
						<tr>
							<th scope="row">{coin.cmc_rank}</th>
							<td>{coin.name}</td>
							<td>{coin.quote.USD.price}</td>
							<td>{coin.quote.USD.percent_change_24h}</td>
							<td>{coin.quote.USD.market_cap}</td>
							<td>{coin.quote.USD.volume_24h}</td>
						</tr>
					)
				})}
				</tbody>
			</table>
		</>
	);
};

export default Dashboard;
