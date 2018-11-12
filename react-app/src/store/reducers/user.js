import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {isLoggedIn: true};
        case actionTypes.LOGOUT:
            return {isLoggedIn: false};
        default:
            return state;
    }
};

export default userReducer;