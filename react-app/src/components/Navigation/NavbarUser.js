import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const navbarUser = (props) => {

    const {name, url, closeMenu} = props;
    return (
        // eslint-disable-next-line
        <NavLink to={url} className="navbar-item is-size-5" onClick={closeMenu}>
            <span className="icon">
                <i className="fas fa-user-circle"/>
            </span>
            <span>
                {name}
            </span>
        </NavLink>
    )
};

navbarUser.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    closeMenu: PropTypes.func
};

navbarUser.defaultProps = {
    url: '#'
};

export default navbarUser;