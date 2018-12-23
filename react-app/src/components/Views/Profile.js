import React, {useEffect} from 'react'
import {useRedux} from '../../index';
import {API} from "../API/config";

const profileView = () => {

    const [user, dispatch] = useRedux('user');

    useEffect(() => {
        console.log(user);
        API.get('auth/me')
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Dupa jaś</h1>
            <p>Lorem ips as dsa as</p>
            <button className="is-primary" onClick={dispatch.logout}>Logout</button>
        </div>
    )
};

export default profileView;