import React from 'react';
import LiquidityChart from "../chart";
import ChartAbsent from "../chartAbsent";

import './chart.css'

const ChartContainer = ({chartData, isLinear}) => {
	const charDataLoaded = !!chartData[0] && !!chartData[0].data && chartData[0].data.length > 0;
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
