import PropTypes from 'prop-types';
import React from 'react';

const Text = ({ children, align, className }) => {
    return (
        <p className={`text${align ? ` text--${align}` : ''}${className ? ` ${className}` : ''}`}>
            {children}
        </p>
    );
};

Text.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string, PropTypes.number]),
    align: PropTypes.string,
    className: PropTypes.string,
};

export default Text;
