import React from 'react';
import {connect} from "react-redux";
import {Router, Route, Switch} from 'react-router-dom';

import './app.css';

import history from '../../common/history';

import {getCMCData} from '../../actions';

import Dashboard from '../dashboard';
import Liquidity from '../liquidity';
import Header from '../header';

const UnconnectedApp = ({coinsData}) => {

	return (
		<div className={'container'}>
			<Router history={history}>
				<Header/>

				<Switch>
					<Route exact
						   path={'/'}
						   component={Dashboard}
						   coinsData={coinsData}
					/>
					<Route
						exact
						path={'/liquidity'}
						component={Liquidity}
						coinsData={coinsData}
					/>
				</Switch>
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
