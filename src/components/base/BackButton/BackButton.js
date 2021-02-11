import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from './../Images';

import './style.scss';

const BackButton = ({ path }) => {
	return (
		<div className="back-button">
			<Link to={`/${path}`}>
				<Arrow color='#e6e6fa' />
			</Link>
		</div>
	);
};

BackButton.propTypes = {
	path: PropTypes.string,
};

export default BackButton;
