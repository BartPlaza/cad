import React from 'react'
import PropTypes from 'prop-types';

const navbarItem = (props) => {
    const {name} = props;
    return (
        // eslint-disable-next-line
        <a className="navbar-item is-size-5" href='#'>
            {name}
        </a>
    )
};

navbarItem.propTypes = {
    name: PropTypes.string
};

export default navbarItem;