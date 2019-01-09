import * as actionTypes from "./actionTypes";

export const setPan = (payload) => ({
    type: actionTypes.SET_PAN,
    payload: payload
});
export const setScale = (payload) => ({
    type: actionTypes.SET_SCALE,
    payload: payload
});