import PropTypes from 'prop-types';
import React from 'react';

import {
	Clear,
	Clouds,
	Fog,
	Mist,
	Rain,
	Snow,
	Thunderstorm,
	Tornado,
	Wind
} from './../../base/Images/index';
import { Text } from './../../base/Typography/';

const Condition = ({ icon, description, type }) => {
	const renderIcon = () => {
		switch (icon) {
			case 'mist':
			case 'smoke':
			case 'haze':
			case 'ash':
				return <Mist  />;
			case 'fog':
			case 'sand':
				return <Fog />;
			case 'clear':
				return <Clear />;
			case 'snow':
				return <Snow />;
			case 'clouds':
				return <Clouds />;
			case 'thunderstorm':
				return <Thunderstorm />;
			case 'drizzle':
			case 'rain':
				return <Rain />;
			case 'squall':
				return <Wind />;
			case 'tornado':
				return <Tornado />;
			default:
				return null;
		};
	};

	return (
		<div className={`weather-condition${type ? ` weather-condition--${type}` : ''}`}>
			<Text className="weather-condition__description">
				{description}
			</Text>
			<span className="weather-condition__icon">
				{renderIcon()}
			</span>
		</div>
	);
};

Condition.propTypes = {
	description: PropTypes.string,
	icon: PropTypes.string,
	type: PropTypes.string,
};

export default Condition;
