import PropTypes from 'prop-types';

import React from 'react';

import './style.scss';

const Wrapper = ({ children }) => {
	return (
		<div className="wrapper">{children}</div>
	);
};

Wrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Wrapper;
