import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Alert from './../../base/Alert';
import Container from './../../base/Container';
import Wrapper from './../../base/Wrapper';
import Loader from './../../base/Loader';
import Weather from './../../weather/Weather';
import Forecast from './../../weather/Forecast';
import City from './../../weather/City';
import { getForecast, getWeather } from './../../../controllers/weather/';

const Main = ({ city, handleCity }) => {
	const [showForm, setShowForm] = useState(false);
	const [isWeatherLoaded, setWeatherLoaded] = useState(false);
	const [isForecastLoaded, setForecastLoaded] = useState(false);
	const [weather, setWeather] = useState();
	const [forecast, setForecast] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getWeather(city);
			setWeather(data);
			setWeatherLoaded(true);
		};
		if (!isWeatherLoaded) fetchData();
	}, [isWeatherLoaded, city]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getForecast(city);
			setForecast(data);
			setForecastLoaded(true);
		};
		if (!isForecastLoaded) fetchData();
	}, [isForecastLoaded, city]);

	const changeCity = () => {
		setForecastLoaded(false)
		setWeatherLoaded(false);
		setShowForm(false);
	};

	if (isWeatherLoaded && isForecastLoaded) {
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
						<Weather weather={weather} isToday />
						<Forecast forecast={forecast} />
					</Container>
				) : (
					<Alert
						title="Sorry!"
						text={`Weather for ${city} not found. Try search another city`}
					/>
				)}
			</Wrapper>
		);

	} else return <Loader />;
};

Main.propTypes = {
	city: PropTypes.string,
	formCity: PropTypes.string,
	setCity: PropTypes.func,
	handleCity: PropTypes.func,
};

export default Main;
