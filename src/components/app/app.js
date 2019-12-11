import React from 'react';
import {connect} from "react-redux";
import {Router} from 'react-router-dom';

import history from '../../common/history';

import {getCMCData} from '../../actions';

import Header from '../header';
import Routes from '../routes';

const UnconnectedApp = ({coinsData}) => {

	return (
		<div className={'container'}>
			<Router history={history}>
				<Header/>

				<Routes coinsData={coinsData}/>
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
