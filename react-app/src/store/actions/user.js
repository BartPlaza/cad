import * as actionTypes from './actionTypes';

export const login = (payload) => ({
    type: actionTypes.LOGIN,
    payload
});

export const logout = () => ({
    type: actionTypes.LOGOUT
});

export const setToken = (token) => ({
    type: actionTypes.SET_TOKEN,
    token
});