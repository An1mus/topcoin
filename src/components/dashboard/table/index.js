import React from "react";
import CoinView from "./dashboardCoinView";
import PropTypes from 'prop-types';


/**
 * Table with coins data
 * @param coinsData {Array[]} - coins response array
 */
const CoinsTable = ({coinsData}) => {
	const columns = ['Rank', 'Name', 'Price', 'Price Change (24h)', 'Market Cap', 'Volume (24h)'];

	return (
		<div className='table-responsive min-tw-720'>
			<table className='table'>
				<thead className='thead-light'>
					<tr>
						{columns.map((col, i) => <th key={i}>{col}</th>)}
					</tr>
				</thead>
				<tbody>
					{coinsData.map(coin => {
						return (
							<CoinView key={coin.id} coin={coin}/>
						)
					})}
				</tbody>
			</table>
		</div>
	);
};

CoinsTable.propTypes = {
	coinsData: PropTypes.array.isRequired
};

export default CoinsTable;
