import React from "react";
import {ResponsiveScatterPlot} from '@nivo/scatterplot';

import {formatAxisLabel} from '../../../common/formating';

const LinearChart = ({data}) =>{
	return (
		<div className={'chart-container'}>
			<ResponsiveScatterPlot
				data={data}
				colors={{scheme: 'set2'}}
				margin={{top: 80, right: 100, bottom: 70, left: 90}}
				blendMode="multiply"
				xScale={{type: 'linear'}}
				yScale={{type: 'linear'}}
				axisTop={null}
				axisRight={null}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Volume',
					legendPosition: 'middle',
					legendOffset: -60,
					tickValues: 10,
					format: d => `${formatAxisLabel(d)}`,
				}}
				axisBottom={{
					orient: 'bottom',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Market Cap',
					legendPosition: 'middle',
					legendOffset: 46,
					tickValues: 10,
					format: d => `${formatAxisLabel(d)}`,
				}}
				nodeSize={{key: 'z', values: [0, 4], sizes: [9, 32]}}
				tooltip={({node}) => (
					<div
						style={{
							color: node.style.color,
							background: '#333',
							padding: '12px',
						}}
					>
						<strong>
							{node.data.name}
						</strong>
						<br/>
						Market Cap: {node.data.marketCap}
						<br/>
						24h Volume: {node.data.volume}
						<br/>
						Absolute price change: {node.data.priceChange}
						<br/>
					</div>
				)}
			/>
		</div>
	);
};

export default LinearChart;
