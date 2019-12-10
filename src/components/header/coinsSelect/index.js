import Select from 'react-select';
import React, {useState} from "react";
import {connect} from 'react-redux';

import Loader from '../../loader';
import {getCMCData} from '../../../actions';

/**
 * An element that triggers middleware and shows if data is loaded
 * @param loading {Boolean} - describes if data is loading, to show/hide loading gif
 * @param getCoinsData {Function} - action, that triggers CoinsData change
 * @constructor
 */
const UnconnectedCoinsSelect = ({loading, getCoinsData}) => {
	const options = [
		{value: 10, label: 'First 10 coins'},
		{value: 20, label: 'First 20 coins'},
		{value: 50, label: 'First 50 coins'},
		{value: 100, label: 'First 100 coins'},
		{value: 'all', label: 'All coins'},
	];
	const [selectedOption, selectOption] = useState(options[3]);
	const handleCoinsSelectChange = (newOption) => {
		// change selected option
		selectOption(newOption);

		// trigger middleware to get latest data
		getCoinsData(newOption.value);
	};

	return (
		<>
			<div className='selectContainer'>
				<Select
					className={'coinsSelect'}
					value={selectedOption}
					onChange={handleCoinsSelectChange}
					options={options}
				/>

				<Loader loading={loading}/>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	const {isLoading} = state.cmcListCallReducer;
	return {isLoading};
};

const mapDispatchToProps = {
	getCoinsData: getCMCData
};

const CoinsSelect = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCoinsSelect);

export default CoinsSelect;
