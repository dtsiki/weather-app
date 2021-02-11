import PropTypes from 'prop-types';
import React from 'react';

import { Text } from './../../base/Typography/';
import { Humidity as HumidityIcon } from './../../base/Images';

const Humidity = ({ value }) => {
	return (
		<Text className="weather-humidity">
			<span className="weather-humidity__icon">
				<HumidityIcon />
			</span>
			<span className="weather-humidity__label">
				Humidity {value}
			</span>
		</Text>
	);
};

Humidity.propTypes = {
	temp: PropTypes.number,
	className: PropTypes.string,
};

export default Humidity;
