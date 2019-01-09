import {store} from '../../../index'
import {getScale} from "../../../store/reducers/camera";

const getScaledValue = (value) => {
    const cameraState = store.getState()['camera'];
    const scale = getScale(cameraState);
    return value / scale;
};

export default getScaledValue;