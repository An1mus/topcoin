import React from "react";

import CoinsSelect from './coinsSelect';

import './header.css';

const Header = () => {
	return (
		<header className='mb-5'>
			<div className='mb-3 mt-3'>
				<h1>TopCoin</h1>
				<h4>Web app for simple analysis of crypto assets</h4>
			</div>

			<CoinsSelect />
		</header>
	);
};


export default Header;
