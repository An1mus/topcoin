import React from 'react';

const ChartAbsent = () => {
	return (
		<>
			<div className="mt-5 mb-5 jumbotron jumbotron-fluid text-center">
				<div className="container">
					<h1 className="display-4">Seems coinsData is empty</h1>
					<p className="lead">
						The coin data wasn't loaded yet, you need to select one of the options from
						the dropdown
					</p>
				</div>
			</div>
		</>
	);
};

export default ChartAbsent;
