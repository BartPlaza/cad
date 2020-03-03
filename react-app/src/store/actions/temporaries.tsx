import {TempLine} from "../../components/Canvas/generators/generateTempLine";
import * as actionTypes from "./actionTypes";

export const setTempLines = (tempLines: TempLine[]) => ({
    type: actionTypes.SET_TEMP_LINES,
    payload: tempLines
});