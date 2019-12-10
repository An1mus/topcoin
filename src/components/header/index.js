import React, {useState} from "react";
import Select from "react-select";
import Loader from "../loader";

import './header.css';

const Header = ({loading}) => {
	const options = [
		{value: 10, label: 'First 10 coins'},
		{value: 20, label: 'First 20 coins'},
		{value: 50, label: 'First 50 coins'},
		{value: 100, label: 'First 100 coins'},
		{value: 100, label: 'All coins'},
	];
	const [selectedOption, selectOption] = useState(options[0]);

	return (
		<header className='mb-5'>
			<div className='mb-3 mt-3'>
				<h1>TopCoin</h1>
				<h4>Web app for simple analysis of crypto assets</h4>
			</div>

			<div className='selectContainer'>
				<Select
					className={'coinsSelect'}
					value={selectedOption}
					onChange={selectOption}
					options={options}
				/>

				<Loader loading={!loading}/>
			</div>
		</header>
	);
};

export default Header;
