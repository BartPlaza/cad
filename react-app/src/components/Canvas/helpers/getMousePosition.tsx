import {store} from '../../../index'
import {getPan, getScale} from "../../../store/reducers/camera";

export type MousePosition = {
    x: number,
    y: number
}

const getMousePosition = (x: number,y: number): MousePosition => {
    /*const cameraState = store.getState()['camera'];
    const scale = getScale(cameraState);
    const pan = getPan(cameraState);
    return {
       x: (x / scale) - (pan.x / scale),
       y: (y / scale) - (pan.y / scale)
    };*/
    return {
        x: x,
        y: y
    }
};

export default getMousePosition;