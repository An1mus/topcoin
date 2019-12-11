import React from 'react';
import {connect} from 'react-redux';
import LiquidityChart from './chart';

import {formatCrypto} from '../../common/formating';

class Liquidity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			chartData: [],
			isRequesting: false
		};
	};

	/***
	 * @method getDerivedStateFromProps - defines if the chart should be updated, since useEffect
	 * hook was giving a warning for async component rendering
	 * @param coinsData - coins data from props
	 * @param isRequesting - state of the api request from props
	 * @param state - nextState of the app
	 * @return {null} - returns null when there is no updates for the current state
	 */
	static getDerivedStateFromProps({coinsData, isRequesting}, state) {
		if(!coinsData && !isRequesting) return null;
		if(isRequesting) return {isRequesting};

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

	render() {
		const {chartData, isRequesting} = this.state;
		return (
			<>
				<h2>Liquidity</h2>
				<LiquidityChart data={chartData}/>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	const {coinsData, isRequesting} = state.cmcListCallReducer;

	return {coinsData, isRequesting};
};

export default connect(mapStateToProps)(Liquidity);
