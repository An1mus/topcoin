import React from "react";

import CoinsTable from './table';
import CoinsAbsent from './coinsAbsent';

import STUBDATA from 'common/stubdata';

const Dashboard = ({coinsData}) => {

	return (
		<>
			<h2>Coins Overview</h2>
			{
				STUBDATA.length === 0
					? <CoinsTable coinsData={STUBDATA} />
					: <CoinsAbsent />
			}

		</>
	);
};

export default Dashboard;
