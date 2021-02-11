import PropTypes from 'prop-types';
import React from 'react';

import moment from 'moment';

import { Title } from './../../base/Typography';

const Date = ({ date }) => {
	const dayFormat = 'D MMM YYYY';

	return (
		<Title type="h2" className="weather-date">
			{moment(date).format(dayFormat)}
		</Title>
	);
};

Date.propTypes = {
	date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Date;
