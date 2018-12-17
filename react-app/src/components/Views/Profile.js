import React from 'react'
import { useRedux } from '../../index';

const profileView = () => {

    const [user, dispatch] = useRedux('user');

    return (
        <div className="container">
            <h1>Dupa jaś</h1>
            <p>Lorem  ips  as dsa as</p>
            <button className="is-primary" onClick={dispatch.logout}>Logout</button>
        </div>
    )
};

export default profileView;