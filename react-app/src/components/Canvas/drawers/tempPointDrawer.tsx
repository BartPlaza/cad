import { store } from '../../../index'
import {getScale} from "../../../store/reducers/camera";
import {Point} from "../generators/generatePoint";
import React from "react";
import getContext from "../helpers/getContexFromCanvasRef";

const tempPointDrawer = (canvasRef:React.RefObject<HTMLCanvasElement>, point: Point) => {

    const context = getContext(canvasRef);

    if(context) {
        const scale = getScale(store.getState()['camera']);
        const size = 6 / scale;
        context.fillStyle = 'lightgray';
        context.fillRect(point.x - size/2, point.y - size/2, size, size);
        context.fillStyle = 'black';
    }
};

export default tempPointDrawer;