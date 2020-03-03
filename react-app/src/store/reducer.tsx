import { combineReducers } from 'redux';
import userReducer from './reducers/user';
import localeReducer from './reducers/locale';
import canvasReducer, {CanvasState} from './reducers/canvas';
import cameraReducer from './reducers/camera';
import temporariesReducer, {TemporariesState} from "./reducers/temporaries";

export type GlobalState = {
    user: any,
    locale: string,
    temporaries: TemporariesState
    canvas: CanvasState,
    camera: any
}

const rootReducer = combineReducers({
    user: userReducer,
    locale: localeReducer,
    temporaries: temporariesReducer,
    canvas: canvasReducer,
    camera: cameraReducer
});

export default rootReducer;