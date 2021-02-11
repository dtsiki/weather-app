import PropTypes from 'prop-types';
import React from 'react';

import moment from 'moment';

import Weather from './../Weather';

import './style.scss';

const Forecast = ({ forecast }) => {
	const renderForecast = () => {
		return forecast.map((item, index) => {
			if (moment(item.dt_txt).day() !== moment().day()) {
				return (
					<Weather
						key={index}
						weather={item}
						isForecast
					/>
				);
			}
		})
	};

	return (
		<div className="forecast">
			{renderForecast()}
		</div>
	);
};

Forecast.propTypes = {
	forecast: PropTypes.array,
};

export default Forecast;
