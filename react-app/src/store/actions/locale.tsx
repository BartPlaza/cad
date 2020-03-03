import * as actionTypes from './actionTypes';

export const setLocale = (locale: string): setLocaleAction => ({
    type: actionTypes.SET_LOCALE,
    locale: locale
});


interface setLocaleAction {
    type: typeof actionTypes.SET_LOCALE,
    locale: string
}

export type LocaleActions = setLocaleAction;