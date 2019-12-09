import React from "react";

import CoinView from './dashboardCoinView'

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
						<CoinView coin={coin}/>
					)
				})}
				</tbody>
			</table>
		</>
	);
};

export default Dashboard;
