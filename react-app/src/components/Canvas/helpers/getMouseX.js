import {store} from '../../../index'
import {getScale} from "../../../store/reducers/camera";

const getMouseX = (x) => {
    const cameraState = store.getState()['camera'];
    const scale = getScale(cameraState);
    return x / scale;
};

export default getMouseX;