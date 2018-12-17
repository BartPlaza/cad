import React from 'react';
import PropTypes from 'prop-types';
import {joinClasses} from "../../../helpers/functions";

const passwordField = (props) => {
    const {label, placeholder, value, updateAction, error} = props;
    const classes = joinClasses(['input', error ? 'is-danger' : null]);
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input className={classes}
                       type="password"
                       placeholder={placeholder}
                       value={value}
                       onChange={(event) => updateAction(event.target.value)}
                />
            </div>
            {error && <p className="help is-danger">{error}</p>}
        </div>
    )
};

passwordField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    updateAction: PropTypes.func.isRequired,
    error: PropTypes.array
};

passwordField.defaultProps = {
    label: '',
    placeholder: '',
    value: '',
};

export default passwordField;