import React from 'react';
import PropTypes from 'prop-types';
import {joinClasses} from "../../helpers/functions";

const formButton = (props) => {

    const {name, action, format} = props;
    const classes = joinClasses(['button', format]);
    return (
        <div className="control">
            <button className={classes} onClick={action}>{name}</button>
        </div>
    )
};

formButton.propTypes = {
    name: PropTypes.string,
    action: PropTypes.func.isRequired,
    format: PropTypes.string
};

formButton.defaultProps = {
    name: '',
    format: 'is-primary'
};

export default formButton;