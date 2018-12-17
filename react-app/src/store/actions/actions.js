import * as userActions from './user';
import * as localeActions from './locale';

const setUpActionDispatchers = (store) => ({
    'user': {
        login: (token) => store.dispatch(userActions.login(token)),
        logout: () => store.dispatch(userActions.logout()),
        setToken: (token) => store.dispatch(userActions.setToken(token))
    },
    'locale': localeActions
});

export default setUpActionDispatchers;