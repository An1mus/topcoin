import React from 'react';

const CoinsAbsent = () => {
	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Seems coinsData is empty</h1>
					<p className="lead">
						You see this message since, it seems, that coins data wasn't loaded.
					</p>
				</div>
			</div>
		</>
	);
};

export default CoinsAbsent;
