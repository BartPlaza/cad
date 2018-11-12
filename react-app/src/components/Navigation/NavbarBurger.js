import React from 'react'
import {joinClasses} from "../../helpers/functions";
import PropTypes from 'prop-types'

const navbarBurger = (props) => {
    const {isOpen, updateOpen} = props;
    const burgerClasses = joinClasses(['navbar-burger', isOpen ? 'is-active' : null]);
    return (
        // eslint-disable-next-line
        <a role="button" className={burgerClasses} aria-label="menu" aria-expanded="false" onClick={updateOpen}>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
        </a>
    )
};

navbarBurger.propTypes = {
    isOpen: PropTypes.bool,
    updateOpen: PropTypes.func
};

navbarBurger.defaultProps = {
    isOpen: false
};

export default navbarBurger;