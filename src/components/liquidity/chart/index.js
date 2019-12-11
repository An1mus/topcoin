import React from "react";
import {ResponsiveScatterPlot} from '@nivo/scatterplot';

import './chart.css'

const LiquidityChart = ({data}) => (
	<div className="chart-container">
		<ResponsiveScatterPlot
			data={data}
			margin={{top: 60, right: 140, bottom: 70, left: 90}}
			xScale={{type: 'linear', min: 0, max: 'auto'}}
			xFormat={function (e) {
				return e + " kg"
			}}
			yScale={{type: 'linear', min: 0, max: 'auto'}}
			yFormat={function (e) {
				return e + " cm"
			}}
			blendMode="multiply"
			axisTop={null}
			axisRight={null}
			axisLeft={{
				orient: 'left',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Volume',
				legendPosition: 'middle',
				legendOffset: -60
			}}
			axisBottom={{
				orient: 'bottom',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Market Cap',
				legendPosition: 'middle',
				legendOffset: 46
			}}
			tooltip={({node}) => (
				<div
					style={{
						color: node.style.color,
						background: '#333',
						padding: '12px 16px',
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

export default LiquidityChart;
