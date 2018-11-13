import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';

const navbarItem = (props) => {
    const {name, url} = props;
    return (
        <NavLink to={url} className="navbar-item is-size-5" >
            {name}
        </NavLink>
    )
};

navbarItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

navbarItem.defaultProps = {
    url: '#'
};

export default navbarItem;