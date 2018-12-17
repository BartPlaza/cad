import React from 'react';
import PropTypes from 'prop-types';
import {joinClasses} from "../../../helpers/functions";

const textField = (props) => {
    const {label, placeholder, value, updateAction, error} = props;
    const classes = joinClasses(['input', error ? 'is-danger' : null]);
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input className={classes}
                       type="text"
                       placeholder={placeholder}
                       value={value}
                       onChange={(event) => updateAction(event.target.value)}
                />
            </div>
            {error && <p className="help is-danger">{error}</p>}
        </div>
    )
};

textField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    updateAction: PropTypes.func.isRequired,
    error: PropTypes.array
};

textField.defaultProps = {
    label: '',
    placeholder: '',
    value: '',
};

export default textField;