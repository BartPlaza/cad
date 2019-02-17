import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    token: null,
    name: null,
    email: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                isLoggedIn: true,
                token: action.payload.meta.token,
                name: action.payload.data.name,
                email: action.payload.data.email
            };
        case actionTypes.LOGOUT:
            return {
                isLoggedIn: false,
                token: null,
                name: null,
                email: null
            };
        case actionTypes.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case actionTypes.SAVE_FORM:
            return {
                ...state,
                form: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;