import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = props => {
    const {onSubmit, name} = props;
    return (
        <div className="field">
            <div className="control">
                <button className="button" onClick={onSubmit}>{name}</button>
            </div>
        </div>
    );
};

SubmitButton.propTypes = {
};

export default SubmitButton;