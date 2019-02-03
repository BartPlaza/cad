import React from 'react';
import PropTypes from 'prop-types';

const BulmaError = props => {
    return (
        <p className="help is-danger">
            {props.error}
        </p>
    );
};

BulmaError.propTypes = {
    error: PropTypes.string
};

export default BulmaError;