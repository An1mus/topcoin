import React from 'react';
import {connect} from 'react-redux';

import {formatCrypto} from '../../common/formating';

import ChartContainer from './chartContainer';

class Liquidity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			chartData: [],
			minmaxValues: {},
			isLinear: false,
		};
	};

	/***
	 * @method getDerivedStateFromProps - defines if the chart should be updated, since useEffect
	 * hook was giving a warning for async component rendering
	 * @param props - nextProps of the app
	 * @param state - nextState of the app
	 * @return {null} - returns null when there is no updates for the current state
	 */
	static getDerivedStateFromProps({coinsData}, state) {
		if (!coinsData) return null;

		let parsedChartData = [];

		if (coinsData) {
			parsedChartData = [{
				id: 'CoinMarketCap API response',
				data: [...coinsData.map((el) => {
					return {
						id: el.id,
						name: el.name,
						marketCap: '$' + formatCrypto(el.quote.USD.market_cap, 3),
						volume: '$' + formatCrypto(el.quote.USD.volume_24h, 3),
						priceChange: formatCrypto(Math.abs(el.quote.USD.percent_change_24h)) + '%',
						x: el.quote.USD.market_cap,
						y: el.quote.USD.volume_24h,
						z: Math.abs(el.quote.USD.percent_change_24h)
					}
				})]
			}];

		}

		return {chartData: parsedChartData};
	}

	swapChart = () => {
		this.setState((prevState) => ({isLinear: !prevState.isLinear}));
	};

	render() {
		const {chartData, isLinear} = this.state;

		return (
			<>
				<div className="d-flex justify-content-between">
					<h2>Liquidity</h2>

					<button
						className={'btn btn-primary'}
						type="button"
						onClick={() => this.swapChart()}
					>
						Switch to {isLinear ? 'logarithmic' : 'linear'}
					</button>
				</div>
				<ChartContainer chartData={chartData} isLinear={isLinear}/>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	const {coinsData} = state.cmcListCallReducer;

	return {coinsData};
};

export default connect(mapStateToProps)(Liquidity);
