import React from 'react'
import LoginForm from "../Form/LoginForm";
import {Redirect} from "react-router-dom";
import {useRedux} from "../../index";

const authView = ({history}) => {

    const [user,] = useRedux('user');

    return (
        <React.Fragment>
            {user.isLoggedIn ? (
                <Redirect to="/profile"/>
            ) : (
                <div className="container">
                    <LoginForm history={history}/>
                </div>
            )}
        </React.Fragment>
    )
};

export default authView;