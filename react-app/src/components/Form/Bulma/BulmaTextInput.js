import React from 'react';
import PropTypes from 'prop-types';
import {joinClasses} from "../../../helpers/functions";
import BulmaError from "./BulmaError";

const BulmaTextInput = (props) => {
    const {field: {value, onChange, name, error, ref}, disabled} = props;
    const classNames = joinClasses(['input', error ? 'is-danger' : null]);
    return (
        <div className="field">
            <div className="label">
                {name}
            </div>
            <div className="control">
                <input className={classNames} type="text" value={value || ''} onChange={onChange} name={name} disabled={disabled} ref={ref}/>
            </div>
            {error && <BulmaError error={error}/>}
        </div>
    );
};

BulmaTextInput.propTypes = {};

export default BulmaTextInput;