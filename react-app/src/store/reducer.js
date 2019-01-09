import { combineReducers } from 'redux';
import userReducer from './reducers/user';
import localeReducer from './reducers/locale';
import canvasReducer from './reducers/canvas';
import cameraReducer from './reducers/camera';

const rootReducer = combineReducers({
    user: userReducer,
    locale: localeReducer,
    canvas: canvasReducer,
    camera: cameraReducer
});

export default rootReducer;