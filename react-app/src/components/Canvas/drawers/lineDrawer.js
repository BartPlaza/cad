import { store } from '../../../index'
import {getPoints, getScale} from "../../../store/reducers/canvas";

const lineDrawer = (context, line, color) => {
    const canvasState = store.getState()['canvas'];
    const scale = getScale(canvasState);
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
