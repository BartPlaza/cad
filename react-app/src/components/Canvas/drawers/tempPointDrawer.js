import { store } from '../../../index'
import {getScale} from "../../../store/reducers/canvas";

const tempPointDrawer = (context, point) => {
    const scale = getScale(store.getState()['canvas']);
    const size = 6 / scale;
    context.fillStyle = 'grey';
    context.fillRect(point.x - size/2, point.y - size/2, size, size);
    context.fillStyle = 'black';
};

export default tempPointDrawer;