import React, {useState} from 'react';
import {connect} from "react-redux";
import {Router, Route} from 'react-router-dom';
import Select from 'react-select';

import './App.css';

import history from 'common/history';

import {getCMCData} from 'actions';

import Dashboard from 'components/dashboard';
import Liquidity from 'components/liquidity';
import Header from '../header';

const UnconnectedApp = ({getCoinsData, isRequesting, coinsData, error}) => {

	return (
		<div className={'container'}>

			<Header loading={isRequesting} />

			<Router history={history}>
				<Route exact
					   path={'/'}
					   component={Dashboard}
					   isRequesting={isRequesting}
					   coinsData={coinsData}
				/>
				<Route
					exact
					path={'/liquidity'}
					component={Liquidity}
					coinsData={coinsData}
				/>
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
