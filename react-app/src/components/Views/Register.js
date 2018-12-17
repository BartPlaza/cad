import React from 'react'
import RegisterForm from "../Form/RegisterForm";
import { useRedux } from "../../index";
import {Redirect} from "react-router-dom";


const registerView = () => {

    const [user, dispatch] = useRedux('user');

    return (
        <React.Fragment>
            {user.isLoggedIn ? (
                <Redirect to="/profile"/>
            ) : (
                <div className="container">
                    <RegisterForm/>
                </div>
            )}
        </React.Fragment>
    )
};

export default registerView;