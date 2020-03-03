import * as actionTypes from '../actions/actionTypes';
import {LocaleActions} from "../actions/locale";

const initialState: string = 'pl';

const localeReducer = (state = initialState, action: LocaleActions): string => {
    switch (action.type) {
        case actionTypes.SET_LOCALE:
            return action.locale;
        default:
            return state
    }
};

export default localeReducer;