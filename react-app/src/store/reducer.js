import { combineReducers } from 'redux';
import userReducer from './reducers/user';
import localeReducer from './reducers/locale';

const rootReducer = combineReducers({
    user: userReducer,
    locale: localeReducer
});

export default rootReducer;