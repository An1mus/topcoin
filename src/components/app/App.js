import React from 'react';
import {connect} from "react-redux";
import {Router, Route} from 'react-router-dom';

import './App.css';

import history from 'common/history';

import {getCMCData} from 'actions';

import Dashboard from 'components/dashboard';
import Liquidity from 'components/liquidity';

const UnconnectedApp = ({getCoinsData}) => {
	return (
		<div className={'container'}>
			<h1>The app is ready to go</h1>

			<button onClick={() => getCoinsData()}>Get Coin Data</button>

			<Router history={history}>
				<Route exact path={'/'} component={Dashboard}/>
				<Route exact path={'/liquidity'} component={Liquidity}/>
			</Router>
		</div>
	);
};

const mapStateToProps = (state) => {
	const {isRequesting, coinsData, error} = state.cmcListCallReducer;
	return {isRequesting, coinsData, error};
};

const mapDispatchToProps = {
	getCoinsData: getCMCData
};

const App = connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);

export default App;
