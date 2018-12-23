import React, {useEffect} from 'react'
import {API} from "../API/config";
import {useRedux} from "../../index";

const profileView = () => {

    const [, dispatch] = useRedux('user');

    useEffect(() => {
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