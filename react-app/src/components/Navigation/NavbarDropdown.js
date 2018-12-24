import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {joinClasses} from "../../helpers/functions";

const navbarDropdown = (props) => {
    const {name} = props;
    const [visibility, setVisibility] = useState(false);

    const classNames = joinClasses(['navbar-item', 'has-dropdown', 'is-size-5', visibility ? 'is-active' : null]);

    const updateVisibility = () => {
        setVisibility((prevVisibility) => !prevVisibility)
    };

    return (
        <div className={classNames} onMouseEnter={updateVisibility} onMouseLeave={updateVisibility}>
            <a className="navbar-link">
                {name}
            </a>
            <div className="navbar-dropdown">
                {props.children}
            </div>
        </div>
    )
};

navbarDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

navbarDropdown.defaultProps = {
    url: '#'
};

export default navbarDropdown;