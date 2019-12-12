import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
	const links = [
		{url: '/', name: 'Coins Overview'},
		{url: '/liquidity', name: 'Liquidity analysis'}
	];
	const isActive = (path, match, location) => !!(match || path === location.pathname);

	return (
		<>
			{links.map(link => (
					<NavLink
						exact={true}
						className={'ml-3'}
						to={link.url}
						key={link.name}
						activeClassName="text-success"
						isActive={isActive.bind(this, link.url)}
					>
						{link.name}
					</NavLink>
				)
			)}
		</>
	)
};

export default Navigation;
