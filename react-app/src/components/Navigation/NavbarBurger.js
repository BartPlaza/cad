import React from 'react'
import {joinClasses} from "../../helpers/functions";

const navbarBurger = (props) => {
    const {isOpen, updateOpen} = props;
    const burgerClasses = joinClasses(['navbar-burger', isOpen ? 'is-active' : null]);
    return (
        // eslint-disable-next-line
        <a role="button" className={burgerClasses} aria-label="menu" aria-expanded="false" onClick={updateOpen}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    )
};

export default navbarBurger;