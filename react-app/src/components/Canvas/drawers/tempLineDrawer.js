import { store } from '../../../index'
import {getScale} from "../../../store/reducers/canvas";

const tempLineDrawer = (context, tempLine) => {
    const scale = getScale(store.getState()['canvas']);
    context.lineWidth = 1 / scale;
    context.strokeStyle = 'lightgrey';
    context.beginPath();
    context.moveTo(tempLine.start.x, tempLine.start.y);
    context.lineTo(tempLine.end.x, tempLine.end.y);
    context.stroke();
    context.closePath();
};

export default tempLineDrawer;
