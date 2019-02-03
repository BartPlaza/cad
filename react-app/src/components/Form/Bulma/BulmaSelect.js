import React from 'react';
import PropTypes from 'prop-types';
import {joinClasses} from "../../../helpers/functions";
import BulmaError from "./BulmaError";

const BulmaSelect = (props) => {
    const {options, name, onChange, defaultValue, error} = props;
    const classNames = joinClasses(['select', error ? 'is-danger' : null]);
    return (
        <div className="field">
            <div className="label">
                {name}
            </div>
            <div className="control">
                <div className={classNames}>
                    <select name={name} onChange={onChange}>
                        {!defaultValue && <option value="" hidden/>}
                        {options.map((option) =>
                            <option key={option.value} value={option.value}>{option.name}</option>
                        )}
                    </select>
                </div>
            </div>
            {error && <BulmaError error={error}/>}
        </div>
    );
};

BulmaSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired
};

export default BulmaSelect;