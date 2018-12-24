import React from 'react';
import PropTypes from "prop-types";

const navbarButton = (props) => {
    const {name, closeMenu} = props;
    return (
        <a className="navbar-item is-size-5" onClick={closeMenu}>
            {name}
        </a>
    )
};

export default navbarButton;

navbarButton.propTypes = {
    name: PropTypes.string.isRequired,
    closeMenu: PropTypes.func
};
