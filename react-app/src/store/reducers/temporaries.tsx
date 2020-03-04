import {TempLine} from "../../components/Canvas/generators/generateTempLine";
import * as actionTypes from "../actions/actionTypes";
import {Point} from "../../components/Canvas/generators/generatePoint";


export type TemporariesState = {
    points: Point[]
    lines: TempLine[]
}

const initialState: TemporariesState = {
    points: [],
    lines: []
};

const temporariesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_TEMP_LINES:
            return {
                ...state,
                lines: action.payload
            };
        case actionTypes.SET_TEMP_POINTS:
            return {
                ...state,
                points: action.payload
            };
        default:
            return state;
    }
};

export default temporariesReducer
