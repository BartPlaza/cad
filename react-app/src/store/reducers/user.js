import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    token: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                isLoggedIn: true,
                token: action.token
            };
        case actionTypes.LOGOUT:
            return {
                isLoggedIn: false,
                token: null
            };
        case actionTypes.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};

export default userReducer;