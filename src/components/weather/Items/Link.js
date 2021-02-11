import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ path, label }) => {
	return (
		<RouterLink to={path}>
			<span>{label}</span>
		</RouterLink>
	);
};

Link.propTypes = {
	path: PropTypes.string,
	label: PropTypes.string,
};

export default Link;
