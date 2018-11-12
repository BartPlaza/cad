import React from 'react'
import PropTypes from 'prop-types'

const navbarUser = (props) => {

    const {name} = props;
    return (
        // eslint-disable-next-line
        <a className="navbar-item is-size-5" href='#'>
            <span className="icon">
                <i className="fas fa-user-circle"/>
            </span>
            <span>
                {name}
            </span>
        </a>
    )
};

navbarUser.propTypes = {
    name: PropTypes.string
};

export default navbarUser;