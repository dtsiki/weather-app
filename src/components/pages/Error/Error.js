import React from 'react';

import Alert from './../../base/Alert/';
import BackButton from './../../base/BackButton/';
import Container from './../../base/Container/';
import Wrapper from './../../base/Wrapper/';

const Error = () => {
	return (
		<Wrapper>
			<Container>
				<Alert title="Ooooooops!" text="Data not found" />
			</Container>
			<BackButton path="" />
		</Wrapper>
	);
};

export default Error;
