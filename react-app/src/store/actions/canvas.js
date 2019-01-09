import * as actionTypes from './actionTypes';

export const addPoint = (payload) => ({
    type: actionTypes.ADD_POINT,
    payload: payload
});

export const movePoint = (payload) => ({
    type: actionTypes.MOVE_POINT,
    payload: payload
});

export const removePoints = (payload) => ({
    type: actionTypes.REMOVE_POINTS,
    payload: payload
});

export const joinPoints = (payload) => ({
    type: actionTypes.JOIN_POINTS,
    payload: payload
});

export const addLine = (payload) => ({
    type: actionTypes.ADD_LINE,
    payload: payload
});

export const removeLines = (payload) => ({
    type: actionTypes.REMOVE_LINES,
    payload: payload
});

export const selectTool = (payload) => ({
    type: actionTypes.SELECT_TOOL,
    payload: payload
});

export const selectPoint = (payload) => ({
    type: actionTypes.SELECT_POINT,
    payload: payload
});

export const selectLine = (payload) => ({
    type: actionTypes.SELECT_LINE,
    payload: payload
});

export const unselectAll = () => ({
    type: actionTypes.UNSELECT_ALL,
});

