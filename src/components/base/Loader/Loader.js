import React from 'react';

import Wrapper from './../Wrapper';

import './style.scss';

const Loader = () => {
	return (
		<Wrapper>
			<div className="loader">
				<div className="loader__wrapper">
					<div className="loader__spinner"></div>
					<div className="loader__label">
						Loading...
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Loader;
