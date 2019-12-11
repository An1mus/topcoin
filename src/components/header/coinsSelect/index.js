import Select from 'react-select';
import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../../loader';
import {getCMCData} from '../../../actions';

import './coinsSelect.css';

/**
 * An element that triggers middleware and shows if data is loaded
 * @param isRequesting {Boolean} - describes if data is isRequesting, to show/hide loading gif
 * @param getCoinsData {Function} - action, that triggers CoinsData change
 * @constructor
 */
const CoinsSelect = ({isRequesting, getCoinsData}) => {
	const options = [
		{value: 10, label: 'First 10 coins'},
		{value: 20, label: 'First 20 coins'},
		{value: 50, label: 'First 50 coins'},
		{value: 100, label: 'All(100 coins)'},
	];
	const [selectedOption, selectOption] = useState('');
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
					className={'coinsSelect' + (isRequesting ? ' disabled' : '')}
					value={selectedOption}
					onChange={handleCoinsSelectChange}
					options={options}
				/>

				<Loader loading={isRequesting}/>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	const {isRequesting} = state.cmcListCallReducer;
	return {isRequesting};
};

const mapDispatchToProps = {
	getCoinsData: getCMCData
};

CoinsSelect.defaultProps = {
	isRequesting: false
};

CoinsSelect.propTypes = {
	isRequesting: PropTypes.bool.isRequired,
	getCoinsData: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(CoinsSelect);
