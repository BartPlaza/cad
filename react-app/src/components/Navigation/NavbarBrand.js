import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from "prop-types";

const navbarBrand = (props) => {
    const {url} = props;
    return (
        <NavLink to={url} className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="125" height="35"/>
        </NavLink>
    )
};

navbarBrand.propTypes = {
    url: PropTypes.string.isRequired
};

navbarBrand.defaultProps = {
    url: '#'
};

export default navbarBrand;