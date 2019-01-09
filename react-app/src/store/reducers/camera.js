import * as actionTypes from "../actions/actionTypes";

const initialState = {
    scale: 1,
    pan: {x: 0, y: 0}
};

const cameraReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SCALE:
            return {
                ...state,
                scale: action.payload
            };
        case actionTypes.SET_PAN:
            return {
                ...state,
                pan: action.payload
            };
        default: {
            return state;
        }
    }
};

export default cameraReducer;

export const getScale = (state) => state.scale;

export const getPan = (state) => state.pan;