import { store } from '../../../index'
import {getPoints} from "../../../store/reducers/canvas";
import {getScale} from "../../../store/reducers/camera";

const lineDrawer = (context, line, color) => {
    const canvasState = store.getState()['canvas'];
    const cameraState = store.getState()['camera'];
    const scale = getScale(cameraState);
    const points = getPoints(canvasState);
    const start = points.filter((point) => point.id === line.start)[0];
    const end = points.filter((point) => point.id === line.end)[0];
    context.lineWidth = 2 / scale;
    context.strokeStyle = color ? color : 'white';
    if (line.isSelected) {
        context.strokeStyle = 'red'
    }
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
    context.closePath();
    context.strokeStyle = 'white'
};

export default lineDrawer;
