import {store} from '../../../index'
import {getScale} from "../../../store/reducers/camera";
import {Point} from "../generators/generatePoint";
import React, {Ref} from "react";
import getContext from "../helpers/getContexFromCanvasRef";

const pointDrawer = (canvasRef: React.RefObject<HTMLCanvasElement>, point: Point, color?: string): void => {

    const context = getContext(canvasRef);

    if (context) {
        const scale = getScale(store.getState()['camera']);
        const size = 6 / scale;
        context.fillStyle = color ? color : 'black';
        if (point.isSelected) {
            context.fillStyle = 'red'
        }
        context.fillRect(point.x - size / 2, point.y - size / 2, size, size);
        context.fillStyle = 'red';
    }
};

export default pointDrawer;
