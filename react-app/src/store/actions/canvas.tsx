import * as actionTypes from './actionTypes';
import {Point} from "../../components/Canvas/generators/generatePoint";
import {Line} from "../../components/Canvas/generators/generateLine";
import {ToolTypes} from "../../components/Canvas/constants/tools";

export const addPoint = (point: Point) => ({
    type: actionTypes.ADD_POINT,
    payload: point
});

export const addLine = (line: Line) => ({
    type: actionTypes.ADD_LINE,
    payload: line
});


export const selectTool = (tool: ToolTypes) => ({
    type: actionTypes.SELECT_TOOL,
    payload: tool
});

//////

export const movePoint = (payload: any) => ({
    type: actionTypes.MOVE_POINT,
    payload: payload
});

export const removePoints = (payload: any) => ({
    type: actionTypes.REMOVE_POINTS,
    payload: payload
});

export const joinPoints = (payload: any) => ({
    type: actionTypes.JOIN_POINTS,
    payload: payload
});

export const removeLines = (payload: any) => ({
    type: actionTypes.REMOVE_LINES,
    payload: payload
});

export const selectPoint = (payload: any) => ({
    type: actionTypes.SELECT_POINT,
    payload: payload
});

export const selectLine = (payload: any) => ({
    type: actionTypes.SELECT_LINE,
    payload: payload
});

export const unselectAll = () => ({
    type: actionTypes.UNSELECT_ALL,
});

export const addRelation = (payload: any) => ({
    type: actionTypes.ADD_RELATION,
    payload: payload
});

export const updateRelation = (payload: any) => ({
    type: actionTypes.UPDATE_RELATION,
    payload: payload
});

export const addDimension = (payload: any) => ({
    type: actionTypes.ADD_DIMENSION,
    payload: payload
});

export const updateDimension = (payload: any) => ({
    type: actionTypes.UPDATE_DIMENSION,
    payload: payload
});

