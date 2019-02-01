import {store} from '../../../index'
import {getPan, getScale} from "../../../store/reducers/camera";

const getValue = (value, direction) => {
    const cameraState = store.getState()['camera'];
    const scale = getScale(cameraState);
    const pan = getPan(cameraState);
    return (value / scale) + (pan[direction] / scale);
};

export default getValue;