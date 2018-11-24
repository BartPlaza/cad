import * as actionTypes from '../actions/actionTypes';

const initialState = 'pl';

const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCALE:
            return action.locale;
        default:
            return state
    }
};

export default localeReducer;