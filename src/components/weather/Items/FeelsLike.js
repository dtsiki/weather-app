import PropTypes from 'prop-types';
import React from 'react';

import { Text } from './../../base/Typography/';
import { Thermometer } from './../../base/Images';

const FeelsLike = ({ temp }) => {
	return (
		<Text className="weather-feels-like">
			<span className="weather-feels-like__icon">
				<Thermometer />
			</span>
			<span className="weather-feels-like__label">
				Feels like <span className="temp">{Math.round(temp)}</span>
			</span>
		</Text>
	);
};

FeelsLike.propTypes = {
	temp: PropTypes.number,
};

export default FeelsLike;
