import * as actionTypes from './actionTypes';

export const setLocale = (locale) => ({
    type: actionTypes.SET_LOCALE,
    locale: locale
});