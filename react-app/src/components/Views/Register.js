import React from 'react'
import RegisterForm from "../Form/RegisterForm";
import {Redirect} from "react-router-dom";
import {useRedux} from "../../index";

const registerView = () => {

    const [user,] = useRedux('user');

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