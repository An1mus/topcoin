import React from 'react';

import CoinsSelect from './coinsSelect';

import Navigation from "./navigation";

import './header.css';

const Header = () => {
	return (
		<header className='mb-5'>
			<div className='d-flex mb-3 mt-3 justify-content-between'>
				<div>
					<h1>TopCoin</h1>
					<h4>Web app for simple analysis of crypto assets</h4>
				</div>
				<div className='d-flex justify-content-end mt-1'>
					<Navigation />
				</div>
			</div>

			<CoinsSelect/>
		</header>
	);
};


export default Header;
