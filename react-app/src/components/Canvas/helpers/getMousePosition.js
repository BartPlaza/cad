import {store} from '../../../index'
import {getPan, getScale} from "../../../store/reducers/camera";

const getMousePosition = (x,y) => {
    const cameraState = store.getState()['camera'];
    const scale = getScale(cameraState);
    const pan = getPan(cameraState);
    return {
       x: (x / scale) - (pan.x / scale),
       y: (y / scale) - (pan.y / scale)
    };
};

export default getMousePosition;