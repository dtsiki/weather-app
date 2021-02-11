import PropTypes from 'prop-types';
import React from 'react';

import moment from 'moment';

import { Condition, Day, Date, FeelsLike, Humidity, Link, Temp } from './../Items/';

import './style.scss';

const Weather = ({ weather, isForecast, isToday, isDay }) => {
	const dayOfWeekFormat = 'dddd';

	return (
		<div className="weather">
			<Day
				date={isToday ? moment() : weather.dt_txt}
				isToday={isToday}
				isForecast={isForecast}
			/>
			{!isForecast && (
				<Date date={isToday ? moment() : weather.dt_txt} />
			)}
			{!isForecast && (
				<Condition
					icon={weather.weather[0].main.toLowerCase()}
					description={weather.weather[0].description}
				/>
			)}
			<Temp temp={weather.main.temp} />
			{isDay && (
				<Humidity value={weather.main.humidity} />
			)}
			{isDay && (
				<FeelsLike temp={weather.main.feels_like} />
			)}
			{!isDay && (
				<div className="weather-link">
					<Link
						path={`/${moment(weather.dt_txt).format(dayOfWeekFormat).toLowerCase()}`}
						label={`Open ${moment(weather.dt_txt).format(dayOfWeekFormat).toLowerCase()} weather`}
					/>
				</div>
			)}
		</div>
	);
};

Weather.propTypes = {
	weather: PropTypes.object,
	isForecast: PropTypes.bool,
	isToday: PropTypes.bool,
	isDay: PropTypes.bool,
};

export default Weather;
