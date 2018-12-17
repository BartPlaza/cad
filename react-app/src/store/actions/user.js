import * as actionTypes from './actionTypes';

export const login = (token) => ({
    type: actionTypes.LOGIN,
    token
});

export const logout = () => ({
    type: actionTypes.LOGOUT
});

export const setToken = (token) => ({
    type: actionTypes.SET_TOKEN,
    token
});