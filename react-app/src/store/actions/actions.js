import * as userActions from './user';
import * as localeActions from './locale';

const setUpActionDispatchers = (store) => ({
    'user': {
        login: (payload) => store.dispatch(userActions.login(payload)),
        logout: () => store.dispatch(userActions.logout()),
        setToken: (token) => store.dispatch(userActions.setToken(token))
    },
    'locale': localeActions
});

export default setUpActionDispatchers;