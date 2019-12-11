import React from 'react';
import LiquidityChart from './chart';
import chartStubData from "./chart/stub";

const Liquidity = () => {
	return (
		<>
			<h2>Liquidity</h2>
			<LiquidityChart data={chartStubData}/>
		</>
	);
};

export default Liquidity;
