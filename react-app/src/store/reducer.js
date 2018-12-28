import { combineReducers } from 'redux';
import userReducer from './reducers/user';
import localeReducer from './reducers/locale';
import canvasReducer from './reducers/canvas';

const rootReducer = combineReducers({
    user: userReducer,
    locale: localeReducer,
    canvas: canvasReducer
});

export default rootReducer;