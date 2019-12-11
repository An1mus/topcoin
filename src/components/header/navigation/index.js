import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
	const links = [
		{url: '/', name: 'Home'},
		{url: '/liquidity', name: 'Liquidity'}
	];

	return (
		<>
			{links.map(link => (
					<NavLink
						className={'ml-3'}
						to={link.url}
						key={link.name}
					>
						{link.name}
					</NavLink>
				)
			)}
		</>
	)
};

export default Navigation;
