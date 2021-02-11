import PropTypes from 'prop-types';
import React from 'react';

import moment from 'moment';

import { Title } from './../../base/Typography/';

const Day = ({ date, isToday, isForecast }) => {
	const dayFormat = 'dddd';

	return (
		<Title type={isForecast ? 'h3' : 'h1'} className="weather-day">
			{isToday ? 'Today' : moment(date).format(dayFormat)}
		</Title>
	);
};

Day.propTypes = {
	date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	isToday: PropTypes.bool,
	isForecast: PropTypes.bool,
};

export default Day;
