import React from 'react';
import loader from '../../assets/loader.gif'

const Loader = ({loading}) => {
	return (
		<>
			{loading && <img src={loader} alt={'loader'}/>}
		</>
	);
};

export default Loader;
