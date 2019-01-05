import * as userActions from './user';
import * as localeActions from './locale';
import * as canvasActions from './canvas';

const setUpActionDispatchers = (store) => ({
    'user': {
        login: (payload) => store.dispatch(userActions.login(payload)),
        logout: () => store.dispatch(userActions.logout()),
        setToken: (token) => store.dispatch(userActions.setToken(token))
    },
    'locale': {
         setLocale: (locale) => store.dispatch(localeActions.setLocale(locale))
    },
    'canvas': {
        addPoint: (payload) => store.dispatch(canvasActions.addPoint(payload)),
        addLine: (payload) => store.dispatch(canvasActions.addLine(payload)),
        selectTool: (payload) => store.dispatch((canvasActions.selectTool(payload))),
        setScale: (payload) => store.dispatch((canvasActions.setScale(payload)))
    }
});

export default setUpActionDispatchers;