import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from "../dashboard";
import Liquidity from "../liquidity";


const Routes = ({coinsData}) => {
	return (
		<>
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
		</>
	);
};

export default Routes;
