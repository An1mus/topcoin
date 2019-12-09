import React from 'react';
import {Router, Route} from 'react-router-dom';

import './App.css';

import history from 'common/history';

import Dashboard from 'components/dashboard';
import Liquidity from 'components/liquidity';

const App = () => {
	return (
		<div className={'container'}>
			<h1>The app is ready to go</h1>

			<Router history={history}>
				<Route exact path={'/'} component={Dashboard}/>
				<Route exact path={'/liquidity'} component={Liquidity}/>
			</Router>
		</div>
	);
};

export default App;
