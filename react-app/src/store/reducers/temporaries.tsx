import {TempLine} from "../../components/Canvas/generators/generateTempLine";
import * as actionTypes from "../actions/actionTypes";


export type TemporariesState = {
    lines: TempLine[],
}

const initialState: TemporariesState = {
    lines: [],
};

const temporariesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_TEMP_LINES:
            return {
                ...state,
                lines: action.payload
            };
        default:
            return state;
    }
};

export default temporariesReducer
