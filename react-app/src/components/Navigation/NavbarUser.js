import React from 'react'

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

export default navbarUser;