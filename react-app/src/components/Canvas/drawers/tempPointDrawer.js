import { store } from '../../../index'
import {getScale} from "../../../store/reducers/camera";

const tempPointDrawer = (context, point) => {
    const scale = getScale(store.getState()['camera']);
    const size = 6 / scale;
    context.fillStyle = 'grey';
    context.fillRect(point.x - size/2, point.y - size/2, size, size);
    context.fillStyle = 'black';
};

export default tempPointDrawer;