import PropTypes from 'prop-types';
import React from 'react';

import { Text } from './../../base/Typography/';

const Temp = ({ temp }) => {
	return (
		<Text className="weather-temp">
			{Math.round(temp)}
		</Text>
	);
};

Temp.propTypes = {
	temp: PropTypes.number,
};

export default Temp;
