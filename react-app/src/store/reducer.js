import { combineReducers } from 'redux';
import userReducer, * as userState from './reducers/user';
import localeReducer from './reducers/locale';

const rootReducer = combineReducers({
    user: userReducer,
    locale: localeReducer
});

export default rootReducer;