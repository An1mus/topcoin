import React, {useState} from 'react';
import {connect} from 'react-redux';

import CoinsAbsent from './coinsAbsent';
import CoinsTable from "./table";

/**
 * Dashboard exists because there has to be 2 states: data is filled and empty
 * @param coinsData {Array[]} - prop from the store
 */
const Dashboard = ({coinsData}) => {
	return (
		<>
			<h2>Coins Overview</h2>
			{
				coinsData && coinsData.length !== 0
					? <CoinsTable coinsData={coinsData}/>
					: <CoinsAbsent />
			}

		</>
	);
};

const mapStateToProps = (state) => {
	const {coinsData} = state.cmcListCallReducer;
	return {coinsData};
};

export default connect(mapStateToProps, null)(Dashboard);
