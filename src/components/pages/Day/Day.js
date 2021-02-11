import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import moment from 'moment';

import Alert from './../../base/Alert';
import Container from './../../base/Container';
import Wrapper from './../../base/Wrapper';
import Loader from './../../base/Loader';
import BackButton from './../../base/BackButton';
import Weather from './../../weather/Weather';
import City from './../../weather/City';
import ForecastChart from './../../weather/ForecastChart/';
import { getForecastChart } from './../../weather/ForecastChart/getForecastChart';
import { getForecast, getWeather } from './../../../controllers/weather/';

const WEATHER_HOUR = 12;

const Day = ({ date, city, setCity, handleCity }) => {
	const [showForm, setShowForm] = useState(false);
	const [weather, setWeather] = useState();
	const [isWeatherLoaded, setWeatherLoaded] = useState(false);
	const isToday = !moment(date).isSame(moment(), 'day');

	const changeCity = () => {
		setCity(city);
		setWeatherLoaded(false);
		setShowForm(false);
	};

	useEffect(() => {
		const fetchWeather = async () => {
			let data;
			if (moment(date).isSame(moment(), 'day')) {
				data = await getWeather(city);
			} else {
				data = await getForecast(city, date.toDate());
			}
			setWeather(data);
			setWeatherLoaded(true);
		};
		if (!isWeatherLoaded) fetchWeather();
	}, [isWeatherLoaded, city]);

	useEffect(() => {
		if (weather) {
			if (!(moment(date).isSame(moment(), 'day'))) {
				if (isWeatherLoaded) {
					getForecastChart(weather);
				}
			}
		}
	}, [isWeatherLoaded]);

	const renderWeather = () => {
		let preview;

		if (moment(date).isSame(moment(), 'day')) {
			preview = weather;
		} else {
			weather.map((item) => {
				if (moment(item.dt_txt).get('hour') === WEATHER_HOUR) preview = item;
			});
		}

		return preview;
	};

	if (isWeatherLoaded) {
		return (
			<Wrapper>
				<City
					city={city}
					handleCity={handleCity}
					changeCity={changeCity}
					showForm={showForm}
					setShowForm={setShowForm}
				/>
				{weather ? (
				<Container>
					<Weather weather={renderWeather()} isDay />
					{isToday && (
						<ForecastChart />
					)}
				</Container>
				) : (
					<Alert
						title="Sorry!"
						text={`Weather for ${city} not found. Try search another city`}
					/>
				)}
				<BackButton path="" />
			</Wrapper>
		);
	} else return <Loader />
};

Day.propTypes = {
	date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	city: PropTypes.string,
	formCity: PropTypes.string,
	setCity: PropTypes.func,
	handleCity: PropTypes.func,
};

export default Day;
