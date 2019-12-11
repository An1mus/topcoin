import React from 'react';
import LiquidityChart from "../chart";
import ChartAbsent from "../chartAbsent";

import './chart.css'

const ChartContainer = ({chartData, isLinear}) => {
	const charDataLoaded = !!chartData && chartData.length;

	return (
		<>
			{
				charDataLoaded
					?<LiquidityChart data={chartData} isLinear={isLinear}/>
					:<ChartAbsent/>
			}
		</>
	);
};

export default ChartContainer;
