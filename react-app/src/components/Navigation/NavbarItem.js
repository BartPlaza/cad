import React from 'react'

const navbarItem = (props) => {
    const {name} = props;
    return (
        // eslint-disable-next-line
        <a className="navbar-item is-size-5" href='#'>
            {name}
        </a>
    )
};

export default navbarItem;