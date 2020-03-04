import {TempLine} from "../../components/Canvas/generators/generateTempLine";
import * as actionTypes from "./actionTypes";
import {Point} from "../../components/Canvas/generators/generatePoint";

export const setTempPoints = (tempPoints: Point[]) => ({
    type: actionTypes.SET_TEMP_POINTS,
    payload: tempPoints
});

export const setTempLines = (tempLines: TempLine[]) => ({
    type: actionTypes.SET_TEMP_LINES,
    payload: tempLines
});