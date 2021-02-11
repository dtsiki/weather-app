import PropTypes from 'prop-types';
import React from 'react';

import Container from './../Container';
import { Title, Text } from './../Typography/';

const Alert = ({ title, text }) => {
	return (
		<Container>
			<Title type="h1">{title}</Title>
			<Text align="center">{text}</Text>
		</Container>
	);
};

Alert.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
};

export default Alert;
