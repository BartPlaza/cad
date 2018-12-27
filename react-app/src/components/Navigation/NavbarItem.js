import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';


const navbarItem = (props) => {
    const {name, url, closeMenu} = props;
    return (
        <NavLink to={url} className="navbar-item is-size-5" onClick={closeMenu}>
            {name}
        </NavLink>
    )
};

navbarItem.propTypes = {
    //name: intlShape.isRequired,
    url: PropTypes.string.isRequired,
    closeMenu: PropTypes.func
};

navbarItem.defaultProps = {
    url: '#'
};

export default navbarItem;