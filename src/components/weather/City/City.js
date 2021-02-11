import PropTypes from 'prop-types';
import React from 'react';

import { Placeholder, Search, Up } from './../../base/Images/';

import './style.scss';

const City = ({ handleCity, changeCity, city, showForm, setShowForm }) => {
	const toggleForm = () => {
		setShowForm(!showForm)
	};

	return (
		<div className={`city${showForm ? ' city--active' : ' city--hidden'}`}>
			<div className="city-form">
				<input
					className="city-input"
					type="input"
					value={city}
					onChange={(value) => handleCity(value)}
					placeholder={city}
				/>
				<button onClick={changeCity} className="city-search-button">
					<span className="city-search-button__icon">
						<Search />
					</span>
					<span className="city-search-button__label">Search</span>
				</button>
			</div>
			{showForm && (
				<button onClick={toggleForm} className="city-hide-button">
					<span className="city-hide-button__icon">
						<Up />
					</span>
					<span className="city-hide-button__label">Hide form</span>
				</button>
			)}

			<button onClick={toggleForm} className="city-show-button">
				<span className="city-show-button__icon">
					<Placeholder />
				</span>
				<span className="city-show-button__label">{city}</span>
			</button>

		</div>
	);
};

City.propTypes = {
	handleCity: PropTypes.func,
	changeCity: PropTypes.func,
	city: PropTypes.string,
	showForm: PropTypes.bool,
	setShowForm: PropTypes.func,
};

export default City;
