import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const privateRoute = (props) => {
    const {component: Component, user, ...rest} = props;
    return (
        <Route {...rest} render={(props) => (
            user.isLoggedIn ? <Component {...props} /> : <Redirect to="/login"/>
        )}/>
    )
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(privateRoute);