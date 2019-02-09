import React from 'react';
import PropTypes from 'prop-types';
import BulmaError from "./BulmaError";
import {joinClasses} from "../../../helpers/functions";

const BulmaCheckbox = props => {
    const {value, onChange, name, disabled, error} = props;
    return (
        <div className="field">
            <div className="control">
                <label className="checkbox" disabled={disabled}>
                    <input type="checkbox" name={name} onChange={onChange} disabled={disabled} checked={value || false}/>
                    {name}
                </label>
            </div>
            {error && <BulmaError error={error}/>}
        </div>
    );
};

BulmaCheckbox.propTypes = {

};

export default BulmaCheckbox;