import React from 'react'
import LoginForm from "../Form/LoginForm";
import { useRedux } from "../../index";
import {Redirect} from "react-router-dom";


const authView = () => {

    const [user, dispatch] = useRedux('user');

    return (
        <React.Fragment>
        {user.isLoggedIn ? (
                <Redirect to="/profile"/>
            ) : (
                <div className="container">
                    <LoginForm/>
                </div>
            )}
        </React.Fragment>
    )
};

export default authView;